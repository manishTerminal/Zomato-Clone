import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../constant";
import ShimmerUi from "./ShimmerUi";
import "../styles/menu.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Menu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const dispatch = useDispatch();

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
    <div className="flex flex-col justify-center items-center  ">
      <div className="pt-24 flex justify-center items-center w-3/4 shadow">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: "#000" }}>
            {restaurant[2]?.card?.card?.info?.name}
          </h2>
          <h1>{restaurant[2]?.card?.card?.info?.avgRatingString}</h1>
          <h1>{restaurant[2]?.card?.card?.info?.costForTwoMessage}</h1>
        </div>
        <img
          className="w-32 rounded-md m-4"
          src={CDN_URL + restaurant[2]?.card?.card?.info?.cloudinaryImageId}
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold mt-4">Menu : </h3>
        <ol className="flex  m-4 flex-wrap w-3/4 justify-center items-center">
          {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <div
                className="flex justify-between  p-2 shadow-md m-1 rounded-md w-1/3"
                key={item?.card?.info?.id}
              >
                <div>
                  <li className="">{item?.card?.info?.name} </li>
                  <li>Rs. {item?.card?.info?.price / 100}</li>
                  {/* <li>{item?.card?.info?.description}</li> */}
                  <li>{item?.card?.info?.ratings.aggregatedRating.rating}</li>
                  <button
                    className="bg-green-200 m-1 px-4 py-2"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="w-28 h-28">
                  <img
                    className="object-fill"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
            )
          )}
          {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <div
                className="flex justify-between  p-2 shadow-md m-1 rounded-md w-1/3"
                key={item?.card?.info?.id}
              >
                <div>
                  <li className="">{item?.card?.info?.name} </li>
                  <li>Rs. {item?.card?.info?.price / 100}</li>
                  {/* <li>{item?.card?.info?.description}</li> */}
                  <li>{item?.card?.info?.ratings.aggregatedRating.rating}</li>
                  <button
                    className="bg-green-200 m-1 px-4 py-2"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="w-28 h-28">
                  <img
                    className="object-fill"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
            )
          )}
          {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item) => (
              <div
                className="flex justify-between  p-2 shadow-md m-1 rounded-md w-1/3"
                key={item?.card?.info?.id}
              >
                <div>
                  <li className="">{item?.card?.info?.name} </li>
                  <li>Rs. {item?.card?.info?.price / 100}</li>
                  {/* <li>{item?.card?.info?.description}</li> */}
                  <li>{item?.card?.info?.ratings.aggregatedRating.rating}</li>
                  <button
                    className="bg-green-200 m-1 px-4 py-2"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="w-28 h-28">
                  <img
                    className="object-fill"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
            )
          )}
          {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
            (item) => (
              <div
                className="flex justify-between  p-2 shadow-md m-1 rounded-md w-1/3"
                key={item?.card?.info?.id}
              >
                <div>
                  <li className="">{item?.card?.info?.name} </li>
                  <li>Rs. {item?.card?.info?.price / 100}</li>
                  {/* <li>{item?.card?.info?.description}</li> */}
                  <li>{item?.card?.info?.ratings.aggregatedRating.rating}</li>
                  <button
                    className="bg-green-200 m-1 px-4 py-2"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="w-28 h-28">
                  <img
                    className="object-fill"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
            )
          )}
          {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.map(
            (item) => (
              <div
                className="flex justify-between  p-2 shadow-md m-1 rounded-md w-1/3"
                key={item?.card?.info?.id}
              >
                <div>
                  <li className="">{item?.card?.info?.name} </li>
                  <li>Rs. {item?.card?.info?.price / 100}</li>
                  {/* <li>{item?.card?.info?.description}</li> */}
                  <li>{item?.card?.info?.ratings.aggregatedRating.rating}</li>
                  <button
                    className="bg-green-200 m-1 px-4 py-2"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="w-28 h-28">
                  <img
                    className="object-fill"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default Menu;

// return (
//     <div>
//         <h1>{item?.card?.card?.itemCards[0].card.info.name}</h1>
//     </div>

// )
