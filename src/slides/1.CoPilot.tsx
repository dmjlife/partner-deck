import React from 'react';

const CoPilotVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">01 <span>Co-Pilot</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">Co-Pilot / Partnership Proposal</h2>
      <p className="slide-sub">Your capital working as hard as mine</p>
    </>
  );
};

export default CoPilotVideo;
