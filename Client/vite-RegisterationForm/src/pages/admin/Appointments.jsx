import React from "react";
import AppointmentTable from "../../components/adminPage/Table/AppointnmentTable";
import { FaCalendarPlus, FaCalendarCheck, FaClock, FaCheckCircle } from "react-icons/fa";

const Appointments = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Appointments Dashboard</h1>
                    <p className="text-slate-500 mt-1">Manage and schedule patient visits</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaCalendarPlus />
                    Schedule Appointment
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaCalendarCheck />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Scheduled</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">324</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaClock />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Pending Approvals</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">48</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Completed Today</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">182</h3>
                    </div>
                </div>
            </div>

            {/* Appointment Table */}
            <AppointmentTable />
        </div>
    );
};

export default Appointments;
