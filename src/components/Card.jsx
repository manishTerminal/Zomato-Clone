import React from "react";
import "../styles/card.css";
import { CDN_URL } from "../constant";


const Card = ({ cloudinaryImageId, name, avgRating, areaName }) => {

  return (
    <div className="m-4 shadow-md">
    <div className="image">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      </div>
      <div className="info p-2">
      <h2 className="font-medium" style={{color:"black"}}>{name}</h2>
      <h3 className="text-gray-600 font-medium">{avgRating}</h3>
      <h3 className="text-gray-600 font-medium">{areaName}</h3>
      </div>
    </div>
  );
};

export default Card;
