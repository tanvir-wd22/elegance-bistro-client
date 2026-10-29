const MenuItem = ({ element }) => {
  const { name, image, recipe, price } = element;

  return (
    <div className="flex gap-3">
      <img
        src={image}
        className="w-30 object-cover rounded-b-full rounded-tr-full"
      />
      <div>
        <h2 className="mb-1">{name}------------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
