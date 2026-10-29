import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import FoodShop from "../pages/FoodShop";
import Login from "../pages/Login";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <FoodMenu></FoodMenu>,
      },
      {
        path: "/shop/:categoryName",
        element: <FoodShop></FoodShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default webRouter;
