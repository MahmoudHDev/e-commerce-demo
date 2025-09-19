import { useAuth } from "../context/AuthProvider";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const { token } = useAuth();
    console.log(`Private route running ${token}`)
    if (!token) return <Navigate to={'/login'} />;
    return <Outlet />;
}
export default PrivateRoute;