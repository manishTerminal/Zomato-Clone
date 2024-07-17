import { Outlet } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <div>
        <h2 style={{ color: "#000" }}>Offer page</h2>
      </div>
      <Outlet />
    </>
  );
};

export default Offer;
