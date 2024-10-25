import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from '../../../components/EmailTemplate';
import EmailTemplate2 from '../../../components/EmailTemplate2';

export async function POST(request) {
  console.log('send-email start');

  try {
    const formData = await request.json();
    console.log('Formulardaten:', formData);

    // SMTP-Transporter für Gmail konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: false, // Verwenden Sie TLS, false bei Port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('SMTP-Konfiguration:');
    console.log('Host:', process.env.SMTP_HOST);
    console.log('Port:', process.env.SMTP_PORT);
    console.log('User:', process.env.SMTP_USER);

    // E-Mail an den Bewerber senden
    await transporter.sendMail({
      from: `"Orathai Massage" <${process.env.SMTP_USER}>`,
      to: formData.email, // Empfängeradresse aus den Formulardaten
      subject: 'Vielen Dank für Ihre Bewerbung',
      html: `<p>Hallo ${formData.firstName}, vielen Dank für Ihre Bewerbung.</p>`,
    });

    // E-Mail an das Orathai senden
    await transporter.sendMail({
      from: `"${formData.firstName} ${formData.lastName}" <${formData.email}>`,
      to: process.env.RECIPIENT_EMAIL, // Ihre Unternehmens-E-Mail-Adresse
      subject: 'Neue Bewerbung erhalten',
      html: `
        <h3>Neue Bewerbung eingegangen</h3>
        <p><strong>Vorname:</strong> ${formData.firstName}</p>
        <p><strong>Nachname:</strong> ${formData.lastName}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        <p><strong>Telefonnummer:</strong> ${formData.phone}</p>
        <p><strong>Terminwunsch:</strong> ${formData.date}</p>
        <p><strong>Nachricht:</strong> ${formData.message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'E-Mails erfolgreich gesendet' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Fehler beim Senden der E-Mails:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Senden der E-Mails' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}