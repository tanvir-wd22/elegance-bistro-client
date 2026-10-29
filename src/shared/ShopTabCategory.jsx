import ShopCard from "./ShopCard";

const ShopTabCategory = ({ cartItems }) => {
  // console.log(cartItems);

  return (
    <div className="my-8 sm:my-10 lg:my-12 grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cartItems.map((item) => (
        <ShopCard key={item._id} item={item}></ShopCard>
      ))}
    </div>
  );
};

export default ShopTabCategory;
