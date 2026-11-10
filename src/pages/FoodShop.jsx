// 1. Core React Imports
import { useState } from "react";

// 2. Third-Party NPM Packages (Libraries & Routers)
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// 3. Local Components & Custom Hooks (Your Code)
import Container from "../shared/Container";
import HeroCover from "../shared/HeroCover";
import ShopTabCategory from "../shared/ShopTabCategory";
import useFoodMenu from "../hooks/useFoodMenu";

// 4. Assets & Stylesheets (Images & CSS at the bottom)
import orderBanner from "../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";

const FoodShop = () => {
  const { categoryName } = useParams();

  let initialTab = 0;

  if (categoryName === "offered") {
    initialTab = 0;
  } else if (categoryName === "salad") {
    initialTab = 1;
  } else if (categoryName === "pizza") {
    initialTab = 2;
  } else if (categoryName === "soup") {
    initialTab = 3;
  } else if (categoryName === "dessert") {
    initialTab = 4;
  } else if (categoryName === "drink") {
    initialTab = 5;
  }

  const [tabIndex, setTabIndex] = useState(initialTab);

  const foodMenu = useFoodMenu() || [];
  // console.log(foodMenu);

  const offeredMenu = foodMenu?.filter((item) => item.category === "offered");
  console.log(offeredMenu);

  const saladMenu = foodMenu?.filter((item) => item.category === "salad");
  // console.log(saladMenu);

  const pizzaMenu = foodMenu?.filter((item) => item.category === "pizza");
  // console.log(pizzaMenu);

  const soupMenu = foodMenu?.filter((item) => item.category === "soup");
  // console.log(soupMenu);

  const dessertMenu = foodMenu?.filter((item) => item.category === "dessert");
  // console.log(dessertMenu);

  const drinkMenu = foodMenu?.filter((item) => item.category === "drink");
  // console.log(drinksMenu);

  return (
    <>
      <Helmet>
        <title>Elegance Bistro | Shop</title>
      </Helmet>

      <HeroCover
        bgPic={orderBanner}
        title={"our shop"}
        description={"Would you like to try a dish?"}
      ></HeroCover>

      <Container>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Offer</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </TabList>
          <TabPanel>
            <ShopTabCategory cartItems={offeredMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={saladMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={pizzaMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={soupMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={dessertMenu}></ShopTabCategory>
          </TabPanel>
          <TabPanel>
            <ShopTabCategory cartItems={drinkMenu}></ShopTabCategory>
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default FoodShop;
