import React from 'react';

const WhyText: React.FC = () => {
  return (
    <>
      <p className="section-num">03 <span>Why</span></p>
      <div className="text-content">
        <h2>Why Together</h2>
        <div className="divider"></div>
        <p className="highlight">The opportunities in crypto right now are so massive that going it alone significantly restricts growth. I'll increase my chances of success 10x working with others.</p>
        <ul className="item-list">
          <li>
            <p className="item-title">Collaborative friction</p>
            <p className="item-desc">Working closely surfaces blind spots neither of us would see alone.</p>
          </li>
          <li>
            <p className="item-title">Network effects</p>
            <p className="item-desc">The connections we unlock together could open doors neither of us anticipates.</p>
          </li>
          <li>
            <p className="item-title">Aligned incentives</p>
            <p className="item-desc">Consulting revenue covers runway so my personal crypto portfolio stays fully invested. Every dollar sold to cover expenses costs 5x in lost compounding.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhyText;
