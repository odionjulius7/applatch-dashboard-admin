import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();

  const authToken = JSON.parse(localStorage.getItem("data"));

  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
