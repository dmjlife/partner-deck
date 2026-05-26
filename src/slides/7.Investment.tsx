import React from 'react';

const InvestmentVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">07 <span>Investment</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">$5,000 Lifetime Retainer</h2>
      <p className="slide-sub">Only working with 5 others this year</p>
    </>
  );
};

export default InvestmentVideo;
