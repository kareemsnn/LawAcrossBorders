import React from 'react';

export default function Contact() {
  return (
    <div className="card">
      <h2>Contact</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        <div style={{ flex: 2, minWidth: 220 }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Founder</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>Sultan AlSudaairy</div>
          <div style={{ color: '#555', marginBottom: 16 }}>Sultansudairy4@gmail.com</div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Get in Touch</div>
          <div style={{ color: '#333' }}>
            Have questions about our interview series or interested in being featured? We'd love to hear from you.<br /><br />
            You can reach out directly to our team via email, or connect with us on social media.
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 180, alignSelf: 'center' }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Connect With Us</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="mailto:Sultansudairy4@gmail.com" style={{ display: 'flex', alignItems: 'center', color: '#1a3a5d', fontWeight: 500 }}>
              <span style={{ fontSize: 20, marginRight: 8 }}>✉️</span> Email Us
            </a>
            <a href="https://www.linkedin.com/in/sultan-alsudairy/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#1a3a5d', fontWeight: 500 }}>
              <span style={{ fontSize: 20, marginRight: 8 }}>🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 