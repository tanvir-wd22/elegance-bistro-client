import { useEffect, useState } from "react";

import useAxiosSecure from "./useAxiosSecure";

const useFoodMenu = () => {
  const axiosSecure = useAxiosSecure();
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/menus")
      .then((res) => {
        // console.log(res.data);
        setFoodMenu(res.data);
      })
      .catch((error) => {
        console.log("food menu get data error", error);
      });
  }, []);

  return foodMenu;
};

export default useFoodMenu;
