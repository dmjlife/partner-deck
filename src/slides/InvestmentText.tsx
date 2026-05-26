import React from 'react';

const InvestmentText: React.FC = () => {
  return (
    <>
      <p className="section-num">07 <span>Investment</span></p>
      <div className="text-content">
        <h2>Investment &amp; Goals</h2>
        <div className="divider"></div>
        <p className="highlight">Full confidence of at least 100x return on this.</p>
        <ul className="item-list">
          <li>
            <p className="item-title">Long-term engagement to ~2030</p>
            <p className="item-desc">Price sufficient for mutual skin in the game, commitment, and dedicated time. Five partners maximum.</p>
          </li>
          <li>
            <p className="item-title">90% of your crypto private</p>
            <p className="item-desc">4x bull run (more with moonshots). 40% yield target.</p>
          </li>
          <li>
            <p className="item-title">Support included</p>
            <p className="item-desc">Weekly Zoom calls, WhatsApp anytime, custom Loom videos, bespoke research, professional intros, and emergency response.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InvestmentText;
