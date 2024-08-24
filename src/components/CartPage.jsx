import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../constant";
import { Link } from "react-router-dom";
import del from "../assets/delete.png";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log("yp", items);

  const totalPrice = () => {
    let total = 0;
    items.map((item) => {
      total += item.card.info.price / 100;
    });
    return total;
  };

  return (
    <div className="h-[40rem] pt-20 flex justify-around">
      <div className="overflow-y-scroll h-screen p-8">
        <h2 className="text-black font-bold text-3xl mx-4">
          Items in your cart :
        </h2>
        <div className="flex flex-wrap flex-col m-1">
          {items.map((item) => {
            return (
              <>
                <div className=" m-2 flex justify-between shadow-sm ">
                  <div className="flex w-full justify-between">
                    <div className="px-4 py-2">
                      <h2 className="text-black">{item.card.info.name}</h2>
                      <h3 className="text-black">
                        {" "}
                        Rs. {item.card.info.price / 100}
                      </h3>
                    </div>
                    <div className="w-24 h-24 mx-2">
                      <img
                        className="object-fill"
                        src={CDN_URL + item?.card?.info?.imageId}
                      />
                    </div>
                  </div>
                  <button
                    className="mx-4 w-10"
                    onClick={() => dispatch(removeItem(item.card.info.id))}
                  >
                    <img src={del} />
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-black font-semibold m-10">
          Total price : Rs. {totalPrice()}
        </h2>
        <Link to="/checkout">
          <button
            className="bg-red-600 text-white px-4 py-2 h-10"
            onClick={() => dispatch(emptyCart())}
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
