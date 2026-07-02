import React from "react";
import DoctorTable from "../../components/adminPage/Table/DoctorTable";
import { FaUserPlus, FaUserMd, FaUserCheck, FaClock } from "react-icons/fa";

const Doctors = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Doctors Directory</h1>
                    <p className="text-slate-500 mt-1">Manage hospital physicians and departments</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaUserPlus />
                    Add New Doctor
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaUserMd />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Doctors</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">125</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaUserCheck />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Available Now</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">94</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaClock />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">On Duty</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">31</h3>
                    </div>
                </div>
            </div>

            {/* Doctors List */}
            <DoctorTable />
        </div>
    );
};

export default Doctors;
