import React from "react";
import "../styles/card.css";
import { CDN_URL } from "../constant";


const Card = ({ cloudinaryImageId, name, avgRating, areaName }) => {

  return (
    <div className="card">
    <div className="image">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      </div>
      <div className="info">
      <h2 style={{color:"black"}}>{name}</h2>
      <h3>{avgRating}</h3>
      <h3>{areaName}</h3>
      </div>
    </div>
  );
};

export default Card;
