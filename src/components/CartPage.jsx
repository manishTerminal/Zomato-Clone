import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

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
    <div>
      <h2 className="text-black font-bold text-3xl">Items in your cart :</h2>
      <button
        className="bg-red-100 p-2 m-4 shadow hover:bg-slate-500"
        onClick={() => dispatch(removeItem())}
      >
        Remove
      </button>
      <div className="flex flex-wrap m-1">
        {items.map((item) => {
          return (
            <>
              <div className="border w-48 m-4">
                <h2 className="text-black">{item.card.info.name}</h2>
                <h3 className="text-black">
                  {" "}
                  Rs. {item.card.info.price / 100}
                </h3>
              </div>
            </>
          );
        })}
      </div>
      <h2 className="text-black font-bold m-10">
        Total price : {totalPrice()}
      </h2>
    </div>
  );
};

export default CartPage;
