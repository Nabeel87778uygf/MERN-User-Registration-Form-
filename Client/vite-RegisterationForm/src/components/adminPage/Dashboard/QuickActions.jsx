import {
    FaUserPlus,
    FaUserMd,
    FaCalendarPlus,
    FaFileMedical,
} from "react-icons/fa";

const actions = [
    {
        title: "Add Patient",
        icon: <FaUserPlus />,
        color: "bg-blue-600",
    },
    {
        title: "Add Doctor",
        icon: <FaUserMd />,
        color: "bg-green-600",
    },
    {
        title: "Book Appointment",
        icon: <FaCalendarPlus />,
        color: "bg-purple-600",
    },
    {
        title: "Medical Report",
        icon: <FaFileMedical />,
        color: "bg-red-500",
    },
];

const QuickActions = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 p-6 text-slate-800 dark:text-white">

            <h2 className="text-xl font-bold mb-6">
                Quick Actions
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                {actions.map((item, index) => (

                    <button
                        key={index}
                        className={`${item.color} text-white rounded-xl p-6 hover:scale-105 duration-300`}
                    >

                        <div className="text-4xl mb-4">
                            {item.icon}
                        </div>

                        <p className="font-semibold">
                            {item.title}
                        </p>

                    </button>

                ))}

            </div>

        </div>
    );
};

export default QuickActions;