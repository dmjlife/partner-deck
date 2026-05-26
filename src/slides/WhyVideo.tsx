import React from 'react';

const WhyVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">03 <span>Why</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">Infinite-Sum Game</h2>
      <p className="slide-sub">Why this works for both of us</p>
    </>
  );
};

export default WhyVideo;
