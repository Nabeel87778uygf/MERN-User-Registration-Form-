import React, { useState } from "react";
import { FaHospital, FaBell, FaShieldAlt, FaSave, FaSlidersH, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

const Settings = () => {
    const [hospitalName, setHospitalName] = useState("MediCare Hospital");
    const [email, setEmail] = useState("admin@medicare.com");
    const [phone, setPhone] = useState("+92 300 1234567");
    const [address, setAddress] = useState("Sector H-8, Islamabad, Pakistan");
    const [activeTab, setActiveTab] = useState("general");

    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Admin Settings</h1>
                <p className="text-slate-500 mt-1">Configure hospital information, dashboard preferences, and security options</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[500px]">
                {/* Tabs Sidebar */}
                <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4 space-y-1 flex-shrink-0">
                    <button
                        onClick={() => setActiveTab("general")}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold flex items-center gap-3 transition-colors ${
                            activeTab === "general"
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                        <FaHospital /> General Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("notifications")}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold flex items-center gap-3 transition-colors ${
                            activeTab === "notifications"
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                        <FaBell /> Notifications
                    </button>
                    <button
                        onClick={() => setActiveTab("security")}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold flex items-center gap-3 transition-colors ${
                            activeTab === "security"
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                        <FaShieldAlt /> Security & Access
                    </button>
                </div>

                {/* Form Content */}
                <div className="flex-1 p-6 md:p-8">
                    {activeTab === "general" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 pb-3 border-b">
                                <FaSlidersH className="text-blue-600" /> Hospital Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-slate-600 font-semibold text-sm">Hospital Name</label>
                                    <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-500 focus-within:bg-white duration-300">
                                        <FaHospital className="text-slate-400 mr-3" />
                                        <input
                                            type="text"
                                            value={hospitalName}
                                            onChange={(e) => setHospitalName(e.target.value)}
                                            className="bg-transparent outline-none w-full text-slate-800 font-medium text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-slate-600 font-semibold text-sm">Contact Number</label>
                                    <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-500 focus-within:bg-white duration-300">
                                        <FaPhone className="text-slate-400 mr-3" />
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="bg-transparent outline-none w-full text-slate-800 font-medium text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-slate-600 font-semibold text-sm">Support Email</label>
                                    <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-500 focus-within:bg-white duration-300">
                                        <FaEnvelope className="text-slate-400 mr-3" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-transparent outline-none w-full text-slate-800 font-medium text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-slate-600 font-semibold text-sm">Hospital Address</label>
                                    <textarea
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        rows={3}
                                        className="w-full bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 outline-none focus:border-blue-500 focus:bg-white duration-300 text-slate-800 font-medium text-sm resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "notifications" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 pb-3 border-b">
                                <FaBell className="text-blue-600" /> Alert Preferences
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-150">
                                    <div>
                                        <h4 className="font-bold text-slate-800">Email Alerts</h4>
                                        <p className="text-xs text-slate-500">Send summary reports and log updates via email</p>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                                </div>

                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-150">
                                    <div>
                                        <h4 className="font-bold text-slate-800">SMS Reminders</h4>
                                        <p className="text-xs text-slate-500">Alert doctors and patients about scheduled visits</p>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                                </div>

                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-150">
                                    <div>
                                        <h4 className="font-bold text-slate-800">Low Stock Warnings</h4>
                                        <p className="text-xs text-slate-500">Notify immediately when pharmacy inventory falls below limit</p>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 pb-3 border-b">
                                <FaShieldAlt className="text-blue-600" /> Administrative Security
                            </h2>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-slate-600 font-semibold text-sm">Change Admin Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 outline-none focus:border-blue-500 focus:bg-white duration-300 text-slate-800 text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-600 font-semibold text-sm">Confirm Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-slate-100 rounded-xl px-4 py-3 border border-slate-200 outline-none focus:border-blue-500 focus:bg-white duration-300 text-slate-800 text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Save Button */}
                    <div className="mt-8 border-t pt-5 flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                            <FaSave /> Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
