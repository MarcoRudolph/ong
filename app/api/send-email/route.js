// pages/api/send-email.js

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from '../../../components/EmailTemplate';
import EmailTemplate2 from '../../../components/EmailTemplate2';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    // Rendern der E-Mail-Vorlage
    const emailHtml = render(<EmailTemplate2 formData={formData} />);

    // SMTP-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, // oder der von Ihrem SMTP-Anbieter angegebene Port
      secure: false, // true für Port 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-Mail versenden
    try {
      await transporter.sendMail({
        from: `"Orathai Massage" <${process.env.SMTP_USER}>`,
        to: formData.email, // Empfängeradresse aus den Formulardaten
        subject: 'Vielen Dank für Ihre Bewerbung',
        html: emailHtml,
      });
      res.status(200).json({ message: 'E-Mail erfolgreich gesendet' });
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
    }

    await transporter.sendMail({
        from: `"${formData.firstName} ${formData.lastName}" <${formData.email}>`,
        to: process.env.RECIPIENT_EMAIL, // Ihre Unternehmens-E-Mail-Adresse
        subject: 'Neue Bewerbung erhalten',
        html: render(<EmailTemplate formData={formData} />),
      });
  } else {
    res.status(405).json({ error: 'Methode nicht erlaubt' });
  }
}
