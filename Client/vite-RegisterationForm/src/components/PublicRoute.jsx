import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {

    const userString = localStorage.getItem("user");

    let user = null;

    try {
        user = userString ? JSON.parse(userString) : null;
    } catch (error) {
        localStorage.removeItem("user");
        return <Outlet />;
    }

    // Agar user login hai to login/register page na dikhao
    if (user) {

        if (user.role === "admin") {
            return <Navigate to="/admin/dashboard" replace />;
        }

        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;