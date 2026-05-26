import React from 'react';

const WhoVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">02 <span>Who</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">Who</h2>
      <p className="slide-sub">13+ years tech entrepreneur</p>
    </>
  );
};

export default WhoVideo;
