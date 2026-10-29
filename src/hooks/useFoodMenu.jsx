import { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";

const useFoodMenu = () => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/menus`)
      .then((res) => res.json())
      .then((data) => setFoodMenu(data));
  }, []);

  return foodMenu;
};

export default useFoodMenu;
