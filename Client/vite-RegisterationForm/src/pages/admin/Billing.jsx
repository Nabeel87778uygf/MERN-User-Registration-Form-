import React, { useState } from "react";
import { FaDollarSign, FaFileInvoiceDollar, FaCheckCircle, FaExclamationCircle, FaSearch, FaPlus, FaEye, FaDownload } from "react-icons/fa";

const initialInvoices = [
    { id: "INV-1092", patient: "Ahmed Khan", date: "Jul 02, 2026", amount: "$150.00", status: "Paid", method: "Cash" },
    { id: "INV-1091", patient: "Sara Ahmed", date: "Jul 01, 2026", amount: "$1,240.00", status: "Paid", method: "Insurance" },
    { id: "INV-1090", patient: "Bilal Shah", date: "Jun 30, 2026", amount: "$350.00", status: "Pending", method: "Card" },
    { id: "INV-1089", patient: "Zubair Khan", date: "Jun 28, 2026", amount: "$85.00", status: "Failed", method: "Online" },
    { id: "INV-1088", patient: "Ayesha Bibi", date: "Jun 28, 2026", amount: "$450.00", status: "Paid", method: "Card" }
];

const Billing = () => {
    const [invoices] = useState(initialInvoices);
    const [search, setSearch] = useState("");

    const filteredInvoices = invoices.filter(inv =>
        inv.patient.toLowerCase().includes(search.toLowerCase()) ||
        inv.id.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Billing & Invoices</h1>
                    <p className="text-slate-500 mt-1">Monitor billing history, invoice states, and patient collection details</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaPlus />
                    Create Invoice
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaDollarSign />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Revenue Today</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">$48,250.00</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Paid Invoices</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">182 Invoices</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaExclamationCircle />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Pending Approvals</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">12 Invoices</h3>
                    </div>
                </div>
            </div>

            {/* Invoices Table */}
            <div className="bg-white rounded-2xl shadow border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Recent Transactions</h2>
                    <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72 border border-slate-200">
                        <FaSearch className="text-slate-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search invoice or patient..."
                            className="bg-transparent outline-none w-full text-slate-700 text-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 text-slate-600 font-semibold text-sm">
                                <th className="py-3 px-4">Invoice ID</th>
                                <th className="py-3 px-4">Patient</th>
                                <th className="py-3 px-4">Bill Date</th>
                                <th className="py-3 px-4 text-center">Amount</th>
                                <th className="py-3 px-4 text-center">Method</th>
                                <th className="py-3 px-4 text-center">Status</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                            {filteredInvoices.map((inv) => (
                                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-4 font-mono font-medium text-blue-600">{inv.id}</td>
                                    <td className="py-4 px-4 font-semibold text-slate-800">{inv.patient}</td>
                                    <td className="py-4 px-4 text-slate-500">{inv.date}</td>
                                    <td className="py-4 px-4 text-center font-semibold text-slate-800">{inv.amount}</td>
                                    <td className="py-4 px-4 text-center">{inv.method}</td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                            inv.status === "Paid"
                                                ? "bg-green-50 text-green-600 border border-green-200"
                                                : inv.status === "Pending"
                                                ? "bg-yellow-50 text-yellow-600 border border-yellow-200"
                                                : "bg-red-50 text-red-600 border border-red-200"
                                        }`}>
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <div className="flex justify-center gap-3">
                                            <button className="text-slate-500 hover:text-blue-600 transition-colors">
                                                <FaEye />
                                            </button>
                                            <button className="text-slate-500 hover:text-green-600 transition-colors">
                                                <FaDownload />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Billing;
