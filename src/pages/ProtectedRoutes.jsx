import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";


function ProtectedRoutes() {
  const userStatus = useSelector(store => store.fireBase.userStatus);
  const location = useLocation();
  return userStatus === "logged" ? <Outlet/> : <Navigate to="/login" replace state={{from: location}}/>
}

export default ProtectedRoutes