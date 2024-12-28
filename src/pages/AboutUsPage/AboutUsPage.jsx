// src/AboutUsPage.js
import React from 'react';
import './AboutUsPage.css';  // Importing the CSS for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>

      {/* Introduction Section */}
      <section className="intro-section">
        <h2>Welcome to foody.com</h2>
        <p>
          We are a premium food delivery service committed to bringing delicious meals right to your door, quickly and safely. Whether you're craving comfort food or a healthy meal, we’ve got you covered.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make food delivery faster, easier, and more enjoyable for everyone. We strive to offer the highest quality meals while providing an exceptional customer experience.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where anyone can get great food delivered right to their door at the click of a button, with guaranteed freshness and fast delivery times.
        </p>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, [Your Company Name] started with the goal of improving the food delivery experience. What began as a small idea to help busy people get their favorite meals delivered quickly has grown into a leading food delivery service serving thousands of customers daily. Our commitment to quality, convenience, and speed has made us a top choice for food delivery in the area.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Fast Delivery:</strong> Get your meals delivered in as little as 30 minutes.</li>
          <li><strong>Wide Selection:</strong> Choose from a variety of restaurants and cuisines.</li>
          <li><strong>Quality Guaranteed:</strong> We partner with top local restaurants to bring you fresh and tasty meals.</li>
          <li><strong>Easy-to-Use App:</strong> Our app makes ordering food simple and convenient with just a few taps.</li>
          <li><strong>Customer Support:</strong> Our friendly customer support team is available 24/7 to assist you.</li>
        </ul>
      </section>

      {/* Meet the Team (Optional) */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member-2.jpg" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src="team-member-3.jpg" alt="Alice Johnson" />
            <h3>Alice Johnson</h3>
            <p>Head of Customer Support</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Phone: +1 234 567 890</p>
      </section>
    </div>
  );
};

export default AboutUsPage;
