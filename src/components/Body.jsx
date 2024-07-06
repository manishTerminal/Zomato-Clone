import React, { Suspense, useEffect, useState } from "react";
import Card from "./Card";
// import data from "../restaurantList.json";
import "../styles/body.css";
import { API_URL } from "../constant";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  console.log(restaurantList)
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    console.log(res);

    setRestaurantList(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantList(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterData = (searchText, filterRestaurantList) => {
    let fildata = filterRestaurantList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    if (fildata.length === 0) {
      return filterRestaurantList;
    } else {
      return fildata;
    }
  };

  return (restaurantList.length === 0) ? <ShimmerUi/> : (
    <>
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search the restaurant..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            setRestaurantList(filterData(searchText, filterRestaurantList));
          }}
        >
          Search
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filterRestaurantList.map((list) => {
          return <Card {...list.info} key={list.info.id} />;
        })}

        {/* <Card
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
      /> */}
      </div>
    </>
  );
};

export default Body;
