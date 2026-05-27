import React from "react";

const GoalsDetail: React.FC = () => {
  return (
    <>
      <p className="section-num">
        10 <span>Goals & Projections</span>
      </p>
      <div className="text-content">
        <h2>Goals & Projections</h2>
        <p className="item-title">My intention is to be at $2m+ by ~2030</p>
        <p className="item-title">
          This is based on conservative 3-4x bull-run
        </p>
        <img
          alt="Rabby"
          src="https://ucarecdn.com/f8915335-3296-412f-ae9a-511d2f81ed80/rabby.jpg"
          style={{ width: "100%", borderRadius: "8px", marginBottom: "1.5rem" }}
        />
      </div>
    </>
  );
};

export default GoalsDetail;
