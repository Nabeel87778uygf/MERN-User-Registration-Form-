import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/adminPage/Layout/AdminNavbar";
import AdminSidebar from "../components/adminPage/Layout/AdminSidebar";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">

            <AdminSidebar />

            <div className="flex-1">

                <AdminNavbar />

                <main className="p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;