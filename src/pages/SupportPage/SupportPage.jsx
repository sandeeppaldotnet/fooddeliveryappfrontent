// src/SupportPage.js
import React, { useState } from 'react';
import './SupportPage.css'; // Importing CSS for styling

const SupportPage = () => {
  // Handling form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Support request submitted!');
    setFormData({
      name: '',
      email: '',
      issue: ''
    });
  };

  return (
    <div className="support-page">
      <h1>Customer Support</h1>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <ul>
          <li>
            <strong>How do I reset my password?</strong>
            <p>To reset your password, click on "Forgot Password" on the login page and follow the instructions.</p>
          </li>
          <li>
            <strong>How can I track my order?</strong>
            <p>You can track your order by visiting the "My Orders" page in your account.</p>
          </li>
          <li>
            <strong>What is your return policy?</strong>
            <p>We offer a 30-day return policy. For more details, visit our Returns & Exchanges page.</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you need further assistance, feel free to reach out to us!</p>
        <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Phone: +1 234 567 890</p>
      </section>

      {/* Submit Support Request */}
      <section className="support-form-section">
        <h2>Submit a Support Request</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Issue Description:
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit Request</button>
        </form>
      </section>
    </div>
  );
};

export default SupportPage;
