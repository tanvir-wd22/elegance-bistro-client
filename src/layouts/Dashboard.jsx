import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaPaypal,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="flex">
        {/* === dashboard left side panel */}
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu p-4">
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                <span>User Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>
                <span>Reservation</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory">
                <FaPaypal></FaPaypal>
                <span>Payment History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myCart">
                <FaShoppingCart></FaShoppingCart>
                <span>My Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">
                <FaAd></FaAd>
                <span>Add Review</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myBooking">
                <FaBook></FaBook>
                <span>My Booking</span>
              </NavLink>
            </li>
            {/* divider */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* === dashboard right side panel */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
