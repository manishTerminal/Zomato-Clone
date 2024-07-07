import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import { createBrowserRouter } from "react-router-dom";
// import Offer from "./components/Offer";

function App() {
  return (
    <>
      <Navbar />
      <Body />
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
