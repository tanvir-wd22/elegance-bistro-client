import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleDeleteFromCart = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              // 🟢 Moved refetch() inside the success block
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been removed from the cart.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log("carts data delete error", error);
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-2xl font-medium">Total Orders : {cart.length}</h2>
        <h2 className="text-2xl font-medium">Total Price : {totalPrice}</h2>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem, index) => (
                <tr key={cartItem._id}>
                  <th>
                    <span>{index + 1}</span>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={cartItem?.image} alt="cart image" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{cartItem?.name}</span>
                  </td>
                  <td>{cartItem?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteFromCart(cartItem?._id)}
                      className="btn btn-error btn-xs"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
