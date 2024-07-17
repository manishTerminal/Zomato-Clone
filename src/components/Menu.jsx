import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../constant";
import ShimmerUi from "./ShimmerUi";
import "../styles/menu.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Menu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2535583&lng=86.987146&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setRestaurant(json?.data?.cards);
  };

  if (!restaurant) return null;
  console.log(restaurant);

  return restaurant.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="parent">
        <div className="info">
          <h2 style={{ color: "#000" }}>
            {restaurant[2]?.card?.card?.info?.name}
          </h2>
          <h1>{restaurant[2]?.card?.card?.info?.avgRatingString}</h1>
          <h1>{restaurant[2]?.card?.card?.info?.costForTwoMessage}</h1>
          <img
            className="menu-primary-image"
            src={CDN_URL + restaurant[2]?.card?.card?.info?.cloudinaryImageId}
          />
        </div>

        <div className="menu">
          <h3>Menu</h3>
          <ol className="flex m-4 flex-wrap">
            {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (item) => (
                <li className="m-4 border" key={item?.card?.info?.id}>
                  {item?.card?.info?.name}{" "}
                  <button className="bg-green-200 m-1" onClick={()=>dispatch(addItem(item))}>Add</button>
                </li>
              )
            )}
            {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
              (item) => (
                <li className="m-4" key={item?.card?.info?.id}>
                  {item?.card?.info?.name}{" "}
                  <button className="bg-green-200 m-1" onClick={()=>dispatch(addItem(item))}>Add</button>
                </li>
              )
            )}
            {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
              (item) => (
                <li className="m-4" key={item?.card?.info?.id}>
                  {item?.card?.info?.name}{" "}
                  <button className="bg-green-200 m-1" onClick={()=>dispatch(addItem(item))}>Add</button>
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Menu;

// return (
//     <div>
//         <h1>{item?.card?.card?.itemCards[0].card.info.name}</h1>
//     </div>

// )
