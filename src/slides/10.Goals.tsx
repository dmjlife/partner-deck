import React from 'react';

const GoalsVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">10 <span>Goals & Projections</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">Goals & Projections</h2>
      <p className="slide-sub">Where we're headed</p>
    </>
  );
};

export default GoalsVideo;
