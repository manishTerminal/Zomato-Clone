import React from "react";
import success from "../assets/success.png";

function Checkout() {
  return (
    <div className="flex justify-center items-center  h-screen w-full pt-20">
      <h2 className="text-black  text-2xl">
        Your Order is Successfully placed.
      </h2>
      <img src={success} />
    </div>
  );
}

export default Checkout;
