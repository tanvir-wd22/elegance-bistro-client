import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import FoodShop from "../pages/FoodShop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "/menu",
        element: (
          <PrivateRoute>
            <FoodMenu></FoodMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/shop/:categoryName",
        element: <FoodShop></FoodShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default publicRoutes;
