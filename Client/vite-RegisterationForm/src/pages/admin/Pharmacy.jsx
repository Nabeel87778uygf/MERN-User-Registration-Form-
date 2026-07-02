import React, { useState } from "react";
import { FaPlus, FaSearch, FaExclamationTriangle, FaBoxes, FaPrescriptionBottleAlt, FaShoppingBag } from "react-icons/fa";

const initialMedicines = [
    { id: "MED001", name: "Paracetamol 500mg", type: "Tablet", stock: 1250, threshold: 200, category: "Analgesic", price: "$2.50" },
    { id: "MED002", name: "Amoxicillin 250mg", type: "Capsule", stock: 180, threshold: 250, category: "Antibiotic", price: "$12.00" },
    { id: "MED003", name: "Ibuprofen 400mg", type: "Tablet", stock: 850, threshold: 150, category: "NSAID", price: "$4.10" },
    { id: "MED004", name: "Loratadine 10mg", type: "Tablet", stock: 40, threshold: 100, category: "Antihistamine", price: "$6.50" },
    { id: "MED005", name: "Metformin 500mg", type: "Tablet", stock: 920, threshold: 200, category: "Antidiabetic", price: "$8.00" },
    { id: "MED006", name: "Lipitor 10mg", type: "Tablet", stock: 65, threshold: 80, category: "Cardiovascular", price: "$24.50" }
];

const Pharmacy = () => {
    const [medicines] = useState(initialMedicines);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMedicines = medicines.filter(med => 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        med.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lowStockItems = medicines.filter(med => med.stock <= med.threshold).length;

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Pharmacy Management</h1>
                    <p className="text-slate-500 mt-1">Manage medicine inventory, stock levels, and category listings</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaPlus />
                    Add New Medicine
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaPrescriptionBottleAlt />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Medicine Types</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">{medicines.length} Items</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaExclamationTriangle />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Low Stock Warnings</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">{lowStockItems} Items</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                        <FaBoxes />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Items in Stock</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">
                            {medicines.reduce((acc, curr) => acc + curr.stock, 0).toLocaleString()} Qty
                        </h3>
                    </div>
                </div>
            </div>

            {/* Inventory List */}
            <div className="bg-white rounded-2xl shadow border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Inventory Status</h2>
                    <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72 border border-slate-200">
                        <FaSearch className="text-slate-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search medicines..."
                            className="bg-transparent outline-none w-full text-slate-700 text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 text-slate-600 font-semibold text-sm">
                                <th className="py-3 px-4">Code</th>
                                <th className="py-3 px-4">Medicine Name</th>
                                <th className="py-3 px-4">Category</th>
                                <th className="py-3 px-4 text-center">Type</th>
                                <th className="py-3 px-4 text-center">Price</th>
                                <th className="py-3 px-4 text-center">Stock</th>
                                <th className="py-3 px-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                            {filteredMedicines.map((med) => {
                                const isLowStock = med.stock <= med.threshold;
                                return (
                                    <tr key={med.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-4 font-mono font-medium text-blue-600">{med.id}</td>
                                        <td className="py-4 px-4 font-semibold text-slate-800">{med.name}</td>
                                        <td className="py-4 px-4 text-slate-500">{med.category}</td>
                                        <td className="py-4 px-4 text-center">{med.type}</td>
                                        <td className="py-4 px-4 text-center font-medium text-slate-800">{med.price}</td>
                                        <td className="py-4 px-4 text-center font-bold">{med.stock}</td>
                                        <td className="py-4 px-4 text-center">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                                isLowStock 
                                                    ? "bg-red-50 text-red-600 border border-red-200" 
                                                    : "bg-green-50 text-green-600 border border-green-200"
                                            }`}>
                                                {isLowStock ? "Low Stock" : "In Stock"}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;
