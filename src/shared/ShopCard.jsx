import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const ShopCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { name, image, recipe, price } = item;

  const handleAddToCart = (item) => {
    if (user?.email) {
      const cartItem = {
        menuId: item?._id,
        buyerEmail: user?.email,
        name: item?.name,
        recipe: item?.recipe,
        price: item?.price,
      };

      axios.post(`http://localhost:3000/carts`, cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has added to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Are you want to login?",
        text: "Must login to add this item into the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed)
          navigate("/login", { state: { from: location } });
      });
    }
  };

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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline btn-primary border-0 border-b-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
