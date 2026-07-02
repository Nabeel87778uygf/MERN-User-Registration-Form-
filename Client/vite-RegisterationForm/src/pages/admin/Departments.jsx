import React from "react";
import { FaHeartbeat, FaBrain, FaTooth, FaBaby, FaBone, FaAmbulance, FaProcedures, FaEye, FaPlus } from "react-icons/fa";

const departmentsList = [
    {
        name: "Cardiology",
        icon: <FaHeartbeat />,
        doctors: 18,
        capacity: "45 Beds",
        occupancy: "80%",
        head: "Dr. Ali Khan",
        color: "from-red-500 to-rose-600 shadow-rose-500/20"
    },
    {
        name: "Neurology",
        icon: <FaBrain />,
        doctors: 12,
        capacity: "30 Beds",
        occupancy: "60%",
        head: "Dr. Usman Ahmed",
        color: "from-indigo-500 to-blue-600 shadow-blue-500/20"
    },
    {
        name: "Dental Care",
        icon: <FaTooth />,
        doctors: 15,
        capacity: "10 Chairs",
        occupancy: "40%",
        head: "Dr. Hamza Shah",
        color: "from-cyan-500 to-teal-600 shadow-cyan-500/20"
    },
    {
        name: "Pediatrics",
        icon: <FaBaby />,
        doctors: 14,
        capacity: "35 Beds",
        occupancy: "75%",
        head: "Dr. Sara Ahmed",
        color: "from-purple-500 to-fuchsia-600 shadow-purple-500/20"
    },
    {
        name: "Orthopedics",
        icon: <FaBone />,
        doctors: 10,
        capacity: "25 Beds",
        occupancy: "85%",
        head: "Dr. Bilal Shah",
        color: "from-amber-500 to-orange-600 shadow-orange-500/20"
    },
    {
        name: "Emergency",
        icon: <FaAmbulance />,
        doctors: 22,
        capacity: "20 ICU Beds",
        occupancy: "90%",
        head: "Dr. Fahad Mustafa",
        color: "from-red-600 to-orange-600 shadow-red-500/20"
    },
    {
        name: "Ophthalmology",
        icon: <FaEye />,
        doctors: 8,
        capacity: "12 Cabins",
        occupancy: "50%",
        head: "Dr. Ayesha Ray",
        color: "from-emerald-500 to-green-600 shadow-green-500/20"
    },
    {
        name: "General Surgery",
        icon: <FaProcedures />,
        doctors: 16,
        capacity: "50 Beds",
        occupancy: "70%",
        head: "Dr. Zafar Ali",
        color: "from-blue-600 to-indigo-600 shadow-indigo-600/20"
    }
];

const Departments = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Hospital Departments</h1>
                    <p className="text-slate-500 mt-1">Monitor capacity, occupancy, and medical staff per department</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 duration-300 shadow-lg shadow-blue-500/20">
                    <FaPlus />
                    Add Department
                </button>
            </div>

            {/* Department Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {departmentsList.map((dept, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.color} text-white flex items-center justify-center text-2xl shadow-lg`}>
                                    {dept.icon}
                                </div>
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold border border-emerald-200">
                                    Active
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800">{dept.name}</h3>
                            <p className="text-sm text-slate-400 mt-1">Head: {dept.head}</p>

                            <div className="grid grid-cols-2 gap-4 mt-6 border-t border-slate-100 pt-4">
                                <div>
                                    <p className="text-slate-400 text-xs font-medium">Doctors</p>
                                    <p className="text-slate-800 font-bold text-lg mt-0.5">{dept.doctors}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium">Capacity</p>
                                    <p className="text-slate-800 font-bold text-lg mt-0.5">{dept.capacity}</p>
                                </div>
                            </div>
                        </div>

                        {/* Occupancy Progress Bar */}
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                            <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-1.5">
                                <span>Occupancy Rate</span>
                                <span className="text-slate-800">{dept.occupancy}</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                                    style={{ width: dept.occupancy }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Departments;
