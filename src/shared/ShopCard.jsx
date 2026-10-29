const ShopCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="card h-96 bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="order img" className="w-full" />
        </figure>
        <p className="absolute right-0 top-4 mr-4 bg-slate-800 text-white rounded-xs px-2 py-1">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-primary border-0 border-b-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
