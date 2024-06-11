import React from "react";
import "./GlowCard.css"; // Ensure you create this CSS file

const GlowCard = ({ children }) => {
  return <div className="glow-card">{children}</div>;
};

export default GlowCard;
