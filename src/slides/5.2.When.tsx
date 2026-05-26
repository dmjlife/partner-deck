import React from 'react';

const WhenText: React.FC = () => {
  return (
    <>
      <p className="section-num">05 <span>When</span></p>
      <div className="text-content">
        <h2>The Timing</h2>
        <div className="divider"></div>
        <ul className="item-list">
          <li>
            <p className="item-title">Market cycle position</p>
            <p className="item-desc">Market continues to follow historical cycles. True wealth comes from actions taken in bear markets.</p>
          </li>
          <li>
            <p className="item-title">Privacy window closing</p>
            <p className="item-desc">DAC8 is live. FCA's crypto regime hits October 2027. A private wallet created today will be impossible to create cleanly in two years.</p>
          </li>
          <li>
            <p className="item-title">The infrastructure you don't build now, you don't get later</p>
            <p className="item-desc">The wallet value grows the same whether it's anonymous or not. The difference is whether you can still build one when you need it.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhenText;
