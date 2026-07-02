import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const patients = [
    {
        id: 1,
        name: "Ahmed Khan",
        age: 28,
        doctor: "Dr. Ali",
        department: "Cardiology",
        status: "Admitted",
    },
    {
        id: 2,
        name: "Sara Ahmed",
        age: 35,
        doctor: "Dr. Usman",
        department: "Neurology",
        status: "Discharged",
    },
    {
        id: 3,
        name: "Bilal Shah",
        age: 42,
        doctor: "Dr. Hamza",
        department: "Dental",
        status: "Admitted",
    },
];

const PatientTable = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 p-6 overflow-x-auto text-slate-800 dark:text-slate-100">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-xl font-bold">
                    Recent Patients
                </h2>

                <input
                    type="text"
                    placeholder="Search..."
                    className="border dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-slate-800 dark:text-white"
                />

            </div>

            <table className="w-full">

                <thead>

                    <tr className="border-b dark:border-slate-800 text-slate-600 dark:text-slate-400">

                        <th className="text-left py-3">Patient</th>
                        <th>Age</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {patients.map((patient) => (

                        <tr key={patient.id} className="border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">

                            <td className="py-4 font-semibold">
                                {patient.name}
                            </td>

                            <td className="text-center">
                                {patient.age}
                            </td>

                            <td className="text-center">
                                {patient.doctor}
                            </td>

                            <td className="text-center">
                                {patient.department}
                            </td>

                            <td className="text-center">

                                <span
                                    className={`px-3 py-1 rounded-full text-sm text-white ${patient.status === "Admitted"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        }`}
                                >
                                    {patient.status}
                                </span>

                            </td>

                            <td>

                                <div className="flex justify-center gap-3">

                                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        <FaEye />
                                    </button>

                                    <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                                        <FaEdit />
                                    </button>

                                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                                        <FaTrash />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default PatientTable;