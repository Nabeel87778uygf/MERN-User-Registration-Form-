import React from "react";
import { FaFileMedical, FaDownload, FaEye, FaCalendarAlt, FaFileAlt, FaPlus } from "react-icons/fa";

const reportsList = [
    { name: "Monthly Financial Performance Summary", type: "Financial Report", date: "June 2026", size: "2.4 MB", author: "Super Admin" },
    { name: "Patient Admission & Discharge Demographics", type: "Patient Report", date: "Q2 2026", size: "4.1 MB", author: "Medical Records" },
    { name: "Emergency Department Response Time Audit", type: "Operations Report", date: "May 2026", size: "1.8 MB", author: "Emergency Chief" },
    { name: "Pharmacy Inventory Consumption Analysis", type: "Inventory Report", date: "June 2026", size: "3.2 MB", author: "Pharmacy Head" },
    { name: "Doctor Patient Ratio & Workload Evaluation", type: "HR Report", date: "June 2026", size: "1.5 MB", author: "HR Director" }
];

const Reports = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Analytical Reports</h1>
                    <p className="text-slate-500 mt-1">Export, generate, and view detailed hospital statistics and documents</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaPlus />
                    Generate Custom Report
                </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-slate-400 text-sm font-medium">All Generated Reports</p>
                    <h3 className="text-3xl font-bold text-slate-800 mt-2">148</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-slate-400 text-sm font-medium">Scheduled Exports</p>
                    <h3 className="text-3xl font-bold text-slate-800 mt-2">12 Active</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-slate-400 text-sm font-medium">Recent Exports (24h)</p>
                    <h3 className="text-3xl font-bold text-slate-800 mt-2">5 Reports</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-slate-400 text-sm font-medium">System Health Log</p>
                    <h3 className="text-3xl font-bold text-emerald-600 mt-2">100% OK</h3>
                </div>
            </div>

            {/* Reports List */}
            <div className="bg-white rounded-2xl shadow border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Available Document Records</h2>
                
                <div className="space-y-4">
                    {reportsList.map((rep, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                    <FaFileMedical />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 leading-tight">{rep.name}</h4>
                                    <div className="flex flex-wrap gap-4 mt-2 text-slate-500 text-xs font-medium">
                                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                            {rep.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt /> {rep.date}
                                        </span>
                                        <span>• Size: {rep.size}</span>
                                        <span>• By: {rep.author}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm flex items-center gap-1.5 duration-300">
                                    <FaEye /> View
                                </button>
                                <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-4 py-2.5 rounded-xl text-sm flex items-center gap-1.5 duration-300">
                                    <FaDownload /> Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reports;
