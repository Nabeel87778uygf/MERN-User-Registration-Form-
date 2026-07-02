const appointments = [
    {
        id: 1,
        patient: "Ahmed",
        doctor: "Dr. Ali",
        time: "10:00 AM",
        status: "Confirmed",
    },
    {
        id: 2,
        patient: "Sara",
        doctor: "Dr. Hamza",
        time: "11:30 AM",
        status: "Pending",
    },
    {
        id: 3,
        patient: "Bilal",
        doctor: "Dr. Usman",
        time: "01:00 PM",
        status: "Completed",
    },
];

const AppointmentTable = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 p-6 overflow-x-auto text-slate-800 dark:text-slate-100">

            <h2 className="text-xl font-bold mb-5">
                Today's Appointments
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b dark:border-slate-800 text-slate-600 dark:text-slate-400">

                        <th className="text-left py-3">Patient</th>
                        <th>Doctor</th>
                        <th>Time</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {appointments.map((item) => (

                        <tr key={item.id} className="border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">

                            <td className="py-4 font-semibold">
                                {item.patient}
                            </td>

                            <td className="text-center">
                                {item.doctor}
                            </td>

                            <td className="text-center">
                                {item.time}
                            </td>

                            <td className="text-center">

                                <span
                                    className={`px-3 py-1 rounded-full text-white ${item.status === "Confirmed"
                                        ? "bg-green-500"
                                        : item.status === "Pending"
                                            ? "bg-yellow-500"
                                            : "bg-blue-500"
                                        }`}
                                >
                                    {item.status}
                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default AppointmentTable;