import { Helmet } from "react-helmet-async";
import HeroCover from "../shared/HeroCover";
import menuBanner from "../assets/menu/menu-banner.jpg";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";
import SectionTitle from "../shared/SectionTitle";
import FoodMenuCategory from "../shared/FoodMenuCategory";
import useFoodMenu from "../hooks/useFoodMenu";

const FoodMenu = () => {
  const foodMenu = useFoodMenu() || [];
  // console.log(foodMenu);

  const offeredMenu = foodMenu?.filter((item) => item.category === "offered");
  // console.log(offeredMenu);

  const saladMenu = foodMenu?.filter((item) => item.category === "salad");
  // console.log(saladMenu);

  const pizzaMenu = foodMenu?.filter((item) => item.category === "pizza");
  // console.log(pizzaMenu);

  const soupMenu = foodMenu?.filter((item) => item.category === "soup");
  // console.log(soupMenu);

  const dessertMenu = foodMenu?.filter((item) => item.category === "dessert");
  // console.log(dessertMenu);

  const drinkMenu = foodMenu?.filter((item) => item.category === "drink");
  console.log(drinkMenu);

  return (
    <>
      <Helmet>
        <title>Elegance Bistro | Menu</title>
      </Helmet>

      {/* offered menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={menuBanner}
          title="offer menu"
          description="Would you like to try a dish?"
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Offer"
        ></SectionTitle>
        <FoodMenuCategory
          categoryData={offeredMenu}
          categoryName="offered"
        ></FoodMenuCategory>
      </div>

      {/* salad menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={saladBg}
          title="salad"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Salad"
        ></SectionTitle>
        <FoodMenuCategory
          categoryData={saladMenu}
          categoryName="salad"
        ></FoodMenuCategory>
      </div>

      {/* pizza menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={pizzaBg}
          title="pizza"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Pizza"
        ></SectionTitle>
        <FoodMenuCategory
          categoryData={pizzaMenu}
          categoryName="pizza"
        ></FoodMenuCategory>
      </div>

      {/* soup menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={soupBg}
          title="soup"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Soup"
        ></SectionTitle>
        <FoodMenuCategory
          categoryData={soupMenu}
          categoryName="soup"
        ></FoodMenuCategory>
      </div>

      {/* dessert menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={dessertBg}
          title="dessert"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Dessert"
        ></SectionTitle>
        <FoodMenuCategory
          categoryData={dessertMenu}
          categoryName="dessert"
        ></FoodMenuCategory>
      </div>

      {/* drinks menu */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <HeroCover
          bgPic={soupBg}
          title="drinks"
          description="Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type."
        ></HeroCover>
        <SectionTitle
          heading="Don't Miss"
          subHeading="Today's Drink"
        ></SectionTitle>
        <FoodMenuCategory
          categoryData={drinkMenu}
          categoryName="drink"
        ></FoodMenuCategory>
      </div>
    </>
  );
};

export default FoodMenu;
