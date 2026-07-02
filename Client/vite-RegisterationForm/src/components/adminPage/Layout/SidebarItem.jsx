import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon, title }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
        ${isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
            }
        >
            <span className="text-xl">{icon}</span>
            <span className="font-medium">{title}</span>
        </NavLink>
    );
};

export default SidebarItem;