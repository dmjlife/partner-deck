import React from 'react';

const StackVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">06 <span>Stack</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">The Full Stack</h2>
      <p className="slide-sub">Architecture, intelligence, security, support</p>
    </>
  );
};

export default StackVideo;
