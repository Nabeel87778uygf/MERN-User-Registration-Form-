const doctors = [
    {
        id: 1,
        name: "Dr. Ali",
        department: "Cardiology",
        experience: "12 Years",
        status: "Available",
    },
    {
        id: 2,
        name: "Dr. Hamza",
        department: "Dental",
        experience: "8 Years",
        status: "Busy",
    },
    {
        id: 3,
        name: "Dr. Usman",
        department: "Neurology",
        experience: "10 Years",
        status: "Available",
    },
];

const DoctorTable = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 p-6 overflow-x-auto text-slate-800 dark:text-slate-100">

            <h2 className="text-xl font-bold mb-5">
                Doctors
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b dark:border-slate-800 text-slate-600 dark:text-slate-400">

                        <th className="text-left py-3">Doctor</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {doctors.map((doctor) => (

                        <tr key={doctor.id} className="border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">

                            <td className="py-4 font-semibold">
                                {doctor.name}
                            </td>

                            <td className="text-center">
                                {doctor.department}
                            </td>

                            <td className="text-center">
                                {doctor.experience}
                            </td>

                            <td className="text-center">

                                <span
                                    className={`px-3 py-1 rounded-full text-white ${doctor.status === "Available"
                                        ? "bg-green-500"
                                        : "bg-yellow-500"
                                        }`}
                                >
                                    {doctor.status}
                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default DoctorTable;