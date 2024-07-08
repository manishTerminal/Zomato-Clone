import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import { createBrowserRouter } from "react-router-dom";
// import Offer from "./components/Offer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: "/offer",
//     element: <Offer/>
//   }
// ])

export default App;
