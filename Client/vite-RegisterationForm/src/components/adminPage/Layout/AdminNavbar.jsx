import React, { useState, useEffect, useRef } from "react";
import {
    FaBars,
    FaSearch,
    FaBell,
    FaEnvelope,
    FaMoon,
    FaSun,
    FaChevronDown,
    FaUserCheck,
    FaExclamationTriangle,
    FaFileMedical,
    FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = ({ toggleSidebar }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);

    const notificationRef = useRef(null);
    const messageRef = useRef(null);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (messageRef.current && !messageRef.current.contains(event.target)) {
                setShowMessages(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const notifications = [
        {
            id: 1,
            title: "New appointment request",
            desc: "Sara Ahmed scheduled with Dr. Hamza.",
            time: "2 mins ago",
            icon: <FaUserCheck />,
            color: "bg-blue-100 text-blue-600",
        },
        {
            id: 2,
            title: "Low stock alert",
            desc: "Loratadine 10mg is below threshold level.",
            time: "45 mins ago",
            icon: <FaExclamationTriangle />,
            color: "bg-amber-100 text-amber-600",
        },
        {
            id: 3,
            title: "Medical Report ready",
            desc: "Monthly financial report has been compiled.",
            time: "2 hours ago",
            icon: <FaFileMedical />,
            color: "bg-purple-100 text-purple-600",
        },
        {
            id: 4,
            title: "Payment Confirmed",
            desc: "Invoice INV-1092 paid successfully.",
            time: "5 hours ago",
            icon: <FaCheckCircle />,
            color: "bg-green-100 text-green-600",
        },
    ];

    const messages = [
        {
            id: 1,
            sender: "Dr. Ali",
            avatar: "https://i.pravatar.cc/150?img=60",
            msg: "Please check the cardiology ward status report.",
            time: "5 mins ago",
        },
        {
            id: 2,
            sender: "Dr. Usman",
            avatar: "https://i.pravatar.cc/150?img=68",
            msg: "I need to reschedule my appointments for tomorrow afternoon.",
            time: "2 hours ago",
        },
        {
            id: 3,
            sender: "Pharmacy Admin",
            avatar: "https://i.pravatar.cc/150?img=33",
            msg: "Bulk amoxicillin order has arrived from the distributor.",
            time: "1 day ago",
        },
    ];

    return (
        <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between transition-colors duration-300">
            {/* Left */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden text-2xl text-slate-700 dark:text-slate-200"
                >
                    <FaBars />
                </button>

                {/* Search */}
                <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 w-96 transition-colors">
                    <FaSearch className="text-slate-500 dark:text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search patients, doctors..."
                        className="bg-transparent outline-none ml-3 w-full text-slate-800 dark:text-white"
                    />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
                {/* Dark Mode */}
                <button
                    onClick={toggleDarkMode}
                    className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition flex items-center justify-center text-slate-700 dark:text-amber-400"
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                </button>

                {/* Messages Dropdown */}
                <div className="relative" ref={messageRef}>
                    <button
                        onClick={() => {
                            setShowMessages(!showMessages);
                            setShowNotifications(false);
                        }}
                        className="relative w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition flex items-center justify-center text-slate-700 dark:text-slate-200"
                    >
                        <FaEnvelope />
                        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                            {messages.length}
                        </span>
                    </button>

                    {showMessages && (
                        <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="p-4 border-b border-slate-150 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white">Recent Messages</h3>
                                <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold">Mark all as read</button>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-700 max-h-80 overflow-y-auto">
                                {messages.map((msg) => (
                                    <div key={msg.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition flex gap-3 cursor-pointer">
                                        <img src={msg.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-bold text-slate-800 dark:text-white text-sm">{msg.sender}</h4>
                                                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{msg.time}</span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{msg.msg}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t border-slate-100 dark:border-slate-750 text-center">
                                <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-bold">View all messages</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Notifications Dropdown */}
                <div className="relative" ref={notificationRef}>
                    <button
                        onClick={() => {
                            setShowNotifications(!showNotifications);
                            setShowMessages(false);
                        }}
                        className="relative w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition flex items-center justify-center text-slate-700 dark:text-slate-200"
                    >
                        <FaBell />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                            {notifications.length}
                        </span>
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="p-4 border-b border-slate-150 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white">Notifications</h3>
                                <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold">Clear all</button>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-700 max-h-80 overflow-y-auto">
                                {notifications.map((notif) => (
                                    <div key={notif.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition flex gap-3 cursor-pointer">
                                        <div className={`w-9 h-9 rounded-lg ${notif.color} flex items-center justify-center text-sm flex-shrink-0`}>
                                            {notif.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 dark:text-white text-sm">{notif.title}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{notif.desc}</p>
                                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-1">{notif.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t border-slate-100 dark:border-slate-750 text-center">
                                <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-bold">View all notifications</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <Link to="/admin/settings" className="flex items-center gap-3 cursor-pointer no-underline">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="admin"
                        className="w-11 h-11 rounded-full border-2 border-blue-600"
                    />
                    <div className="hidden md:block">
                        <h4 className="font-semibold text-slate-850 dark:text-slate-105">
                            Admin
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Super Admin
                        </p>
                    </div>
                    <FaChevronDown className="text-slate-500" />
                </Link>
            </div>
        </header>
    );
};

export default AdminNavbar;