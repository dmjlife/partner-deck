import React from 'react';

const QuerenciaVideo: React.FC = () => {
  return (
    <>
      <p className="section-num">08 <span>Querencia</span></p>
      <div className="video-frame">
        <div className="play-btn">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span className="video-label">Add your video</span>
      </div>
      <h2 className="slide-heading">Querencia</h2>
      <p className="slide-sub">A place from which one's strength is drawn</p>
    </>
  );
};

export default QuerenciaVideo;
