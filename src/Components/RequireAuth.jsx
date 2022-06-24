import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = UseAuth();
  const location = useLocation();

  // allowedRoles.includes(auth?.role)
  return auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
