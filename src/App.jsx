// import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import { createBrowserRouter } from "react-router-dom";
// import Offer from "./components/Offer";
import { Outlet } from "react-router-dom";
import store from "./utils/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
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
