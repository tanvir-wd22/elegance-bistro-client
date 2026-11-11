import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <div className="flex justify-evenly">
        <h2>Total Orders :{cart.length}</h2>
        <h2>Total Price : {totalPrice}</h2>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="">
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
                    <button className="btn btn-error btn-xs">
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
