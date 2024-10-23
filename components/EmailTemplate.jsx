import React from 'react';

const EmailTemplate = ({ formData }) => (
  <div>
    <h1>Neue Bewerbung eingegangen</h1>
    <p><strong>Vorname:</strong> {formData.firstName}</p>
    <p><strong>Nachname:</strong> {formData.lastName}</p>
    <p><strong>E-Mail:</strong> {formData.email}</p>
    <p><strong>Telefonnummer:</strong> {formData.phone}</p>
    <p><strong>Terminwunsch:</strong> {formData.date}</p>
    <p><strong>Nachricht:</strong> {formData.message}</p>
  </div>
);

export default EmailTemplate;