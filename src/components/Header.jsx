import { Link, NavLink } from "react-router-dom";
import Container from "../shared/Container";
import useAuth from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Header = () => {
  const { user, signOutUser } = useAuth();
  const [cartData] = useCart();
  console.log(cartData);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Food Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/offered">Food Shop</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myCart">
          <div className="flex items-center justify-center gap-2">
            <FaShoppingCart size={20} />
            <span className="badge badge-sm badge-secondary">
              {cartData.length}
            </span>
          </div>
        </NavLink>
      </li>
    </>
  );

  const handleSignOutBtn = async () => {
    try {
      const result = await signOutUser();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-black/30 text-white">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-300 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-xs sm:btn-sm btn-soft text-xl">
              Elegance Bistro
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex gap-3 justify-center items-center">
                <h2 className="text-lg font-medium">{user?.displayName}</h2>
                <button
                  onClick={handleSignOutBtn}
                  className="btn btn-xs sm:btn-sm btn-soft"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link className="btn btn-xs sm:btn-sm btn-soft" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
