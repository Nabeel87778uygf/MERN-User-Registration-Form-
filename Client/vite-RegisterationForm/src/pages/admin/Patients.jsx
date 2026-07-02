import React, { useState } from "react";
import PatientTable from "../../components/adminPage/Table/PatientTable";
import { FaUserPlus, FaSearch, FaFilter, FaUserInjured, FaHospitalUser, FaProcedures } from "react-icons/fa";

const Patients = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Patients Directory</h1>
                    <p className="text-slate-500 mt-1">Manage and view all registered hospital patients</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaUserPlus />
                    Add New Patient
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaUserInjured />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Registered</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">2,458</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaProcedures />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Currently Admitted</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">116</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaHospitalUser />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Outpatients Today</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">45</h3>
                    </div>
                </div>
            </div>

            {/* Patients List */}
            <PatientTable />
        </div>
    );
};

export default Patients;
