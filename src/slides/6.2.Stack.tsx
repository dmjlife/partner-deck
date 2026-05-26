import React from 'react';

const StackText: React.FC = () => {
  return (
    <>
      <p className="section-num">06 <span>Stack</span></p>
      <div className="text-content">
        <h2>Full Stack</h2>
        <div className="divider"></div>
        <ul className="item-list">
          <li>
            <p className="item-num">01</p>
            <p className="item-title">Triple-Wallet Architecture</p>
            <p className="item-desc">Decoy, Shadow (Yield), Ghost. Hardware wallet, custom node, privacy routing, drip-funded with clean paper trails.</p>
          </li>
          <li>
            <p className="item-num">02</p>
            <p className="item-title">Market Intelligence</p>
            <p className="item-desc">Vetted token library, major shift alerts, cycle positioning, AI monitoring, and connections at Coinbase, Chainanalysis, Bittensor, Milk Road.</p>
          </li>
          <li>
            <p className="item-num">03</p>
            <p className="item-title">Bull Market Navigation</p>
            <p className="item-desc">Real-time profit-taking guidance, scaling out strategy, narrative shift flagging, and a dedicated peak exit playbook.</p>
          </li>
          <li>
            <p className="item-num">04</p>
            <p className="item-title">Security &amp; Opsec</p>
            <p className="item-desc">Digital footprint scrub, device hardening, data encryption, on-chain/off-chain identity segregation, zero-knowledge storage.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StackText;
