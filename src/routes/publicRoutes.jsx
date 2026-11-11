import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import FoodShop from "../pages/FoodShop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../components/dashboard/MyCart";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <FoodMenu></FoodMenu>,
      },
      {
        path: "shop/:categoryName",
        element: <FoodShop></FoodShop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default publicRoutes;
