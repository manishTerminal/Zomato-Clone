import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offer from "./components/Offer.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import Menu from "./components/Menu.jsx";
import Month from "./components/Month.jsx";
import CartPage from "./components/CartPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offer",
        element: <Offer />,
        children: [
          {
            path: "month",
            element: <Month />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <CartPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
