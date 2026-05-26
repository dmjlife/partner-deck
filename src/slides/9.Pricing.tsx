import React from 'react';

const Pricing: React.FC = () => {
  return (
    <>
      <p className="section-num">09 <span>Pricing</span></p>
      <div className="pricing-content">
        <h2>Investment Tiers</h2>
        <div className="divider"></div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <p className="pricing-tier">Tier 1</p>
            <p className="pricing-amount">$25k</p>
            <p className="pricing-label">Minimum Entry</p>
            <ul className="pricing-features">
              <li>Shared pool allocation</li>
              <li>Quarterly reports</li>
              <li>Community access</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <p className="pricing-badge">Recommended</p>
            <p className="pricing-tier">Tier 2</p>
            <p className="pricing-amount">$100k</p>
            <p className="pricing-label">Strategic Partner</p>
            <ul className="pricing-features">
              <li>Dedicated allocation</li>
              <li>Monthly reports</li>
              <li>Direct communication</li>
              <li>Priority deal flow</li>
            </ul>
          </div>
          <div className="pricing-card">
            <p className="pricing-tier">Tier 3</p>
            <p className="pricing-amount">$500k+</p>
            <p className="pricing-label">Co-Pilot</p>
            <ul className="pricing-features">
              <li>Custom allocation</li>
              <li>Real-time dashboard</li>
              <li>Advisory seat</li>
              <li>First-look deals</li>
              <li>Co-governance rights</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
