
import React from 'react';

const EmailTemplate2 = ({ formData }) => (
  <div>
    <p>Sehr geehrte/r {formData.firstName} {formData.lastName},</p>
    <p>
      vielen Dank für Ihre Bewerbung bei Orathai Massage. Wir werden Ihre
      Unterlagen prüfen und uns in Kürze bei Ihnen melden.
    </p>
    <p>Mit freundlichen Grüßen,<br />Orathai Wonkanya</p>
  </div>
);

export default EmailTemplate2;