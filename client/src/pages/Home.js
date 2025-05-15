import React from 'react';
import './Home.css';

const latestInterview = {
  title: 'Corporate Law in Saudi Arabia: A New Frontier',
  summary: 'In this illuminating conversation, Sarah Al-Najjar discusses the evolving landscape of corporate law in Saudi Arabia and the impact of recent economic reforms...',
  name: 'Sarah Al-Najjar',
  role: 'Corporate Attorney, Riyadh, Saudi Arabia',
  image: '',
};

const recentInterviews = [
  {
    title: 'Regulatory Challenges in UAE Banking Law',
    summary: 'Ahmed Hassan explores the complexities of financial regulations in the UAE...',
    image: '',
  },
  {
    title: 'International Arbitration in Morocco',
    summary: "Leila Benali discusses Morocco's growing role as an arbitration hub...",
    image: '',
  },
  {
    title: 'Egyptian Commercial Law Reform',
    summary: 'Tarek Ibrahim shares insights on recent commercial law reforms...',
    image: '',
  },
];

export default function Home() {
  return (
    <div>
      <section className="card">
        <h2>Latest Interview</h2>
        <p>Explore our most recent conversation with a leading legal professional from the MENA region, diving into the challenges and opportunities of cross-border practice.</p>
        <div className="latest-interview">
          <div className="latest-interview-info">
            <h3>{latestInterview.title}</h3>
            <p>{latestInterview.summary}</p>
            <div className="interviewee">
              <div className="avatar">SA</div>
              <div>
                <div className="name">{latestInterview.name}</div>
                <div className="role">{latestInterview.role}</div>
              </div>
            </div>
            <div className="read-link">Read Interview</div>
          </div>
          <div className="latest-interview-image">
            <img src={latestInterview.image} alt={latestInterview.title} onError={e => e.target.style.display='none'} />
          </div>
        </div>
      </section>

      <section>
        <h2>Recent Interviews</h2>
        <div className="recent-interviews">
          {recentInterviews.map((item, idx) => (
            <div className="card interview-card" key={idx}>
              <div className="interview-image">
                <img src={item.image} alt={item.title} onError={e => e.target.style.display='none'} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="interview-footer">
                <span className="date">Invalid Date</span>
                <span className="read-link">Read More</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card quote-section">
        <blockquote>
          <span className="quote-mark">&ldquo;</span>
          The emerging legal landscape in the MENA region represents a fascinating intersection of traditional principles and modern commercial demands.
        </blockquote>
        <div className="quote-author">
          <strong>Dr. Nadia El-Fahim</strong><br />
          Professor of International Business Law, American University in Cairo
        </div>
      </section>
    </div>
  );
} 