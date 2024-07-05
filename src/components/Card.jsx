import React from "react";
import "../styles/card.css";

const Card = ({ cloudinaryImageId, name, avgRating, areaName }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{avgRating}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};

export default Card;
