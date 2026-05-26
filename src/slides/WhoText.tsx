import React from 'react';

const WhoText: React.FC = () => {
  return (
    <>
      <p className="section-num">02 <span>Who</span></p>
      <div className="text-content">
        <h2>The Journey</h2>
        <div className="divider"></div>
        <ul className="item-list">
          <li>
            <p className="item-title">$1k into 15 BTC in 2013</p>
            <p className="item-desc">Early believer. Held through the cycles.</p>
          </li>
          <li>
            <p className="item-title">Sold in 2021, 900k into a startup</p>
            <p className="item-desc">Went to $0. The expensive lesson that changed everything.</p>
          </li>
          <li>
            <p className="item-title">Last bull run: back to 400k</p>
            <p className="item-desc">Targeting $2m+ by 2030. Also building YieldEngine and StablePlan.</p>
          </li>
          <li>
            <p className="item-title">All in</p>
            <p className="item-desc">Massive opportunity, even if most of crypto culture is noise. Been up before and need to restore wealth. Your capital working as hard as mine.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhoText;
