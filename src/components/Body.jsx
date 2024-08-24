import React, { Suspense, useEffect, useState } from "react";
import Card from "./Card";
// import data from "../restaurantList.json";
import "../styles/body.css";
import { API_URL } from "../constant";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  // console.log(restaurantList)

  // const fetchRestaurant = async () => {
  //   const data = await fetch(API_URL);
  //   const res = await data.json();
  //   console.log(res);

  //   setRestaurantList(
  //     res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilterRestaurantList(
  //     res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );

  //   console.log(restaurantList);
  //   console.log(filterRestaurantList);
  // };

  // const fetchRestaurant = async () => {
  //   try {
  //     const data = await fetch(API_URL);
  //     const res = await data.json();
  //     console.log(res);

  //     const restaurants = res?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  //     setRestaurantList(restaurants);
  //     setFilterRestaurantList(restaurants);

  //     console.log(restaurants);
  //   } catch (error) {
  //     console.error("Failed to fetch restaurants:", error);
  //     setRestaurantList([]);
  //     setFilterRestaurantList([]);
  //   }
  // };

  const fetchRestaurant = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        console.error(
          "Failed to fetch: ",
          response.status,
          response.statusText
        );
        setRestaurantList([]);
        setFilterRestaurantList([]);
        return;
      }

      const res = await response.json();

      // Log the specific path to debug the structure
      console.log("API Response:", res);
      console.log("Cards:", res?.data?.cards);

      // Adjust this based on the actual structure of your API response
      const cards = res?.data?.cards || [];

      // Explore other indices if [4] doesn't contain the expected data
      let restaurants = [];
      if (cards.length > 0) {
        for (let i = 0; i < cards.length; i++) {
          const gridElements =
            cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log("the card : ", i);
          if (gridElements) {
            restaurants = gridElements;
            break; // Exit loop once restaurants are found
          }
        }
      }

      setRestaurantList(restaurants);
      setFilterRestaurantList(restaurants);

      console.log("Restaurants:", restaurants);
    } catch (error) {
      console.error("Error during fetch:", error);
      setRestaurantList([]);
      setFilterRestaurantList([]);
    }
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

  return restaurantList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <input
          type="text"
          className="search-bar mt-24 border"
          placeholder="Search the restaurant..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="mx-2 bg-red-600 text-white px-4 py-2"
          onClick={() => {
            setRestaurantList(filterData(searchText, filterRestaurantList));

            if (fildata.length === 0) {
              return [];
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap mt-4 justify-center items-center">
        {restaurantList.map((list) => {
          return (
            <Link key={list.info.id} to={"/restaurant/" + list.info.id}>
              <Card {...list.info} />
            </Link>
          );
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
    </div>
  );
};

export default Body;
