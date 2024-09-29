"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('E-Mail erfolgreich gesendet!');
    } else {
      alert('Fehler beim Senden der E-Mail.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Kontakt / Terminanfrage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vorname *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nachname *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>E-Mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefonnummer *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Terminwunsch</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nachricht *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactForm;
