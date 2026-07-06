import {
    FaUserMd,
    FaUserInjured,
    FaCalendarCheck,
    FaHospital,
    FaMoneyBillWave,
    FaFileMedical,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa";

import {
    MdDashboard,
    MdLocalPharmacy,
} from "react-icons/md";

import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const AdminSidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">

            {/* Logo */}

            <div className="border-b border-slate-800 p-6">

                <Link to="/home" className="flex items-center gap-3 no-underline text-white group">

                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-2xl font-bold group-hover:scale-105 duration-300">
                        H
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">
                            Hospital
                        </h2>

                        <p className="text-slate-400 text-sm">
                            Admin Panel
                        </p>

                    </div>

                </Link>

            </div>

            {/* Menu */}

            <div className="flex-1 p-4 space-y-2">

                <SidebarItem
                    to="/admin/dashboard"
                    title="Dashboard"
                    icon={<MdDashboard />}
                />

                <SidebarItem
                    to="/admin/patients"
                    title="Patients"
                    icon={<FaUserInjured />}
                />

                <SidebarItem
                    to="/admin/doctors"
                    title="Doctors"
                    icon={<FaUserMd />}
                />

                <SidebarItem
                    to="/admin/appointments"
                    title="Appointments"
                    icon={<FaCalendarCheck />}
                />

                <SidebarItem
                    to="/admin/departments"
                    title="Departments"
                    icon={<FaHospital />}
                />

                <SidebarItem
                    to="/admin/pharmacy"
                    title="Pharmacy"
                    icon={<MdLocalPharmacy />}
                />

                <SidebarItem
                    to="/admin/billing"
                    title="Billing"
                    icon={<FaMoneyBillWave />}
                />

                <SidebarItem
                    to="/admin/reports"
                    title="Reports"
                    icon={<FaFileMedical />}
                />

                <SidebarItem
                    to="/admin/settings"
                    title="Settings"
                    icon={<FaCog />}
                />

            </div>

            {/* Bottom */}

            <div className="border-t border-slate-800 p-4">

                <Link
                    to="/login"
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 rounded-xl py-3 font-semibold text-white no-underline"
                >
                    <FaSignOutAlt />

                    Logout
                </Link>

            </div>

        </aside>
    );
};

export default AdminSidebar;