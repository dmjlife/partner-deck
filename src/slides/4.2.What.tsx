import React from 'react';

const WhatText: React.FC = () => {
  return (
    <>
      <p className="section-num">04 <span>What</span></p>
      <div className="text-content">
        <h2>The Offer</h2>
        <div className="divider"></div>
        <ul className="item-list">
          <li>
            <p className="item-title">Full custody and ownership</p>
            <p className="item-desc">Your assets, your wallets, your keys. Always.</p>
          </li>
          <li>
            <p className="item-title">80/20 Pareto portfolio</p>
            <p className="item-desc">Minimal and focused on winners. Block the noise.</p>
          </li>
          <li>
            <p className="item-title">Significant but low-maintenance growth</p>
            <p className="item-desc">99% of the cognitive load handled for you. Think hedge fund manager with a dedicated research arm.</p>
          </li>
          <li>
            <p className="item-title">Find the &lt;1% genuinely innovating</p>
            <p className="item-desc">I dislike crypto culture too. But massive opportunity exists for those who can filter the noise.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhatText;
