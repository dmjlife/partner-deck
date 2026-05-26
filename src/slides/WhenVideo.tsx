import React from 'react';

const WhenVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">05 <span>When</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">Two Windows Closing</h2>
      <p className="slide-sub">Why the timing matters now</p>
    </>
  );
};

export default WhenVideo;
