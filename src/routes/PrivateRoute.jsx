import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // useAuth, useLocation hooks
  const location = useLocation();
  const { user, loading } = useAuth();

  //loading & user state handle
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  //   navigate to location & state
  return (
    <Navigate to="/login" state={{ from: location }}>
      PrivateRoute
    </Navigate>
  );
};

export default PrivateRoute;
