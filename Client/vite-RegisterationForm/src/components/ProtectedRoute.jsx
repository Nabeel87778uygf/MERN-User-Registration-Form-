import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {

    // Phase 1 (Temporary)
    // Token cookie me hai.
    // User temporary localStorage me hai.
    const userString = localStorage.getItem("user");

    let user = null;

    try {
        user = userString ? JSON.parse(userString) : null;
    } catch (error) {
        localStorage.removeItem("user");
        return <Navigate to="/login" replace />;
    }

    // User not found
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Role Check
    if (allowedRoles && !allowedRoles.includes(user.role)) {

        if (user.role === "admin") {
            return <Navigate to="/admin/dashboard" replace />;
        }

        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;