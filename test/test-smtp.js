import nodemailer from 'nodemailer';

async function testSMTP() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log('SMTP-Konfiguration:');
  console.log('Host:', process.env.SMTP_HOST);
  console.log('Port:', process.env.SMTP_PORT);
  console.log('User:', process.env.SMTP_USER);

  try {
    await transporter.verify();
    console.log('Verbindung erfolgreich');
  } catch (error) {
    console.error('Fehler bei der SMTP-Verbindung:', error);
  }
}

testSMTP();