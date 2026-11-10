import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const ShopCard = ({ item }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const { name, image, recipe, price } = item;

  const handleAddToCart = (item) => {
    const cartItem = {
      menuId: item?._id,
      buyerEmail: user?.email,
      name,
      recipe,
      price,
    };

    if (user?.email) {
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been added to the cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch the data from react query to update the cart
            refetch();
          }
        })
        .catch((error) => {
          console.log("carts data read error", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add item to cart. Please try again.",
          });
        });
    } else {
      Swal.fire({
        title: "Do you want to login?",
        text: "You must login to add this item to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
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
