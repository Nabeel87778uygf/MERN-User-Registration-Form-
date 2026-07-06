import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
    FaBars,
    FaTimes,
    FaHospital,
    FaUserCircle,
    FaUserShield
} from "react-icons/fa";

const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const location = useLocation()

    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const isAdmin = user && user.role === "admin";

    const closeMenu = () => setMenu(false)

    return (

        <nav className="fixed top-0 left-0 w-full z-50">

            <div className="backdrop-blur-xl bg-white/10 border-b border-white/20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-between items-center h-20">

                        <Link to="/home" className="flex items-center gap-3 no-underline">

                            <div className="bg-white p-3 rounded-full">

                                <FaHospital className="text-purple-700 text-2xl" />

                            </div>

                            <div>

                                <h1 className="text-white text-2xl font-bold">

                                    MediCare

                                </h1>

                                <p className="text-gray-200 text-sm">

                                    Hospital Management

                                </p>

                            </div>

                        </Link>

                        <ul className="hidden lg:flex items-center gap-10 text-white font-medium">

                            {navLinks.map((link) => (

                                <li key={link.path}>

                                    <Link
                                        to={link.path}
                                        className={`hover:text-pink-300 cursor-pointer duration-300 no-underline ${location.pathname === link.path
                                            ? "text-pink-300"
                                            : "text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                        <div className="hidden lg:flex items-center gap-5">

                            {isAdmin && (
                                <Link to="/admin/dashboard" className="text-white flex items-center gap-2 no-underline hover:text-pink-300 duration-300">

                                    <FaUserShield />

                                    Admin

                                </Link>
                            )}

                            <Link to="/profile" className="text-white flex items-center gap-2 no-underline hover:text-pink-300 duration-300">

                                <FaUserCircle />

                                Profile

                            </Link>

                            <Link
                                to="/appointment"
                                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300 no-underline"
                            >
                                Book Appointment
                            </Link>

                        </div>

                        <div
                            className="lg:hidden text-white text-2xl cursor-pointer"
                            onClick={() => setMenu(!menu)}
                        >

                            {

                                menu ?

                                    <FaTimes />

                                    :

                                    <FaBars />

                            }

                        </div>

                    </div>

                </div>

            </div>

            {

                menu &&

                <div className="lg:hidden backdrop-blur-xl bg-white/10">

                    <ul className="flex flex-col text-center gap-6 py-10 text-white">

                        {navLinks.map((link) => (

                            <li key={link.path}>

                                <Link
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={`no-underline duration-300 ${location.pathname === link.path
                                        ? "text-pink-300"
                                        : "text-white hover:text-pink-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>

                            </li>

                        ))}

                        {isAdmin && (
                            <li>

                                <Link
                                    to="/admin/dashboard"
                                    onClick={closeMenu}
                                    className="text-white no-underline hover:text-pink-300 duration-300"
                                >
                                    Admin Panel
                                </Link>

                            </li>
                        )}

                        <li>

                            <Link
                                to="/profile"
                                onClick={closeMenu}
                                className="text-white no-underline hover:text-pink-300 duration-300"
                            >
                                Profile
                            </Link>

                        </li>

                        <li>

                            <Link
                                to="/appointment"
                                onClick={closeMenu}
                                className="bg-white text-purple-700 px-8 py-3 rounded-xl no-underline inline-block"
                            >
                                Book Appointment
                            </Link>

                        </li>

                    </ul>

                </div>

            }

        </nav>

    )

}

export default Navbar