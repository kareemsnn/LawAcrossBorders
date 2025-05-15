import React from 'react';

export default function About() {
  return (
    <div className="card">
      <h2>About This Project</h2>
      <p>
        Law Across Borders is an independent interview series exploring the real-world journey of early-career lawyers in the MENA region working in corporate, transactional, or regulatory law — highlighting trends, challenges, and cross-border insights.
      </p>
      <div style={{ display: 'flex', gap: 32, marginTop: 32, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3>Explore Journeys</h3>
          <p>Discover the professional paths of emerging legal talents across the Middle East and North Africa.</p>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3>Gain Insights</h3>
          <p>Learn about regional legal trends, challenges, and opportunities from practitioners on the ground.</p>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3>Cross-Border Perspective</h3>
          <p>Understand how legal practices vary across MENA countries and their international implications.</p>
        </div>
      </div>
    </div>
  );
} 