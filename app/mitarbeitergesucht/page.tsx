"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from '../../components/EmailTemplate';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Ihre Bewerbung wurde erfolgreich gesendet.');
        // Formular zurücksetzen
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          date: '',
          message: '',
        });
      } else {
        alert('Fehler beim Senden der Bewerbung. Bitte versuchen Sie es erneut.');
      }
    } catch (error: any) {
      console.error('Fehler beim Absenden:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center mt-10 mb-10">
      <div className="w-full lg:w-1/4 px-10">
        <h1 className="text-2xl text-darkred">Wir suchen Dich</h1>
        <p>
          Erfahrene Thai-Masseure (m/w/d) gesucht! Orathai, hochqualifiziert und
          ausgebildet an der renommierten Wat Pho Massageschule in Bangkok,
          sucht Verstärkung für ihr gemütliches Studio nahe dem Bahnhof in
          Pinneberg. Wenn Sie Leidenschaft für traditionelle Thai-Massage haben,
          freuen wir uns auf Ihre Kontaktaufnahme! Gerne sonst auch einfach auf Handy anrufen.
        </p>
      </div>
      <div className="contact-form w-full lg:w-1/4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1">Vorname *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="p-2 border border-gray-600 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Nachname *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="p-2 border border-gray-600 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">E-Mail *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border border-gray-600 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Telefonnummer *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-2 border border-gray-600 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Terminwunsch</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-2 border border-gray-600 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Nachricht *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-2 border border-gray-600 rounded h-32"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Senden...' : 'Senden'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
