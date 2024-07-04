import React from "react";
import Card from "./Card";
import data from "../restaurantList.json";

const Body = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        image={data[0].info.cloudinaryImageId}
        name={data[0].info.name}
        avgRating={data[0].info.avgRating}
        areaName={data[0].info.areaName}
      />
      <Card
        image={data[1].info.cloudinaryImageId}
        name={data[1].info.name}
        avgRating={data[1].info.avgRating}
        areaName={data[1].info.areaName}
      />
      <Card
        image={data[2].info.cloudinaryImageId}
        name={data[2].info.name}
        avgRating={data[2].info.avgRating}
        areaName={data[2].info.areaName}
      />

      <Card
        image={data[3].info.cloudinaryImageId}
        name={data[3].info.name}
        avgRating={data[3].info.avgRating}
        areaName={data[3].info.areaName}
      />
      <Card
        image={data[4].info.cloudinaryImageId}
        name={data[4].info.name}
        avgRating={data[4].info.avgRating}
        areaName={data[4].info.areaName}
      />

      <Card
        image={data[5].info.cloudinaryImageId}
        name={data[5].info.name}
        avgRating={data[5].info.avgRating}
        areaName={data[5].info.areaName}
      />

      <Card
        image={data[0].info.cloudinaryImageId}
        name={data[0].info.name}
        avgRating={data[0].info.avgRating}
        areaName={data[0].info.areaName}
      />

<Card
        image={data[4].info.cloudinaryImageId}
        name={data[4].info.name}
        avgRating={data[4].info.avgRating}
        areaName={data[4].info.areaName}
      />
    </div>
  );
};

export default Body;
