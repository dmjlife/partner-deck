import React from 'react';

const CoPilotText: React.FC = () => {
  return (
    <>
      <p className="section-num">01 <span>Co-Pilot</span></p>
      <div className="text-content">
        <h2>The Problem</h2>
        <div className="divider"></div>
        <ul className="item-list">
          <li>
            <p className="item-title">Increasing inflation</p>
            <p className="item-desc">Traditional investments offer poor returns in real terms.</p>
          </li>
          <li>
            <p className="item-title">Broken financial system</p>
            <p className="item-desc">Extractive banking and profiteering at every layer.</p>
          </li>
          <li>
            <p className="item-title">Almost total surveillance state</p>
            <p className="item-desc">How do we maintain maximum freedom, power, and sovereignty in an increasingly oppressive world?</p>
          </li>
          <li>
            <p className="item-title">The key question</p>
            <p className="item-desc">How can we invest productively while maintaining security and privacy?</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CoPilotText;
