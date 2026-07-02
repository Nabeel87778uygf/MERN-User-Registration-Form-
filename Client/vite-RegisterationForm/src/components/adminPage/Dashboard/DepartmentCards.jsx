import {
    FaHeartbeat,
    FaBrain,
    FaTooth,
    FaBaby,
    FaBone,
    FaAmbulance,
} from "react-icons/fa";

const departments = [
    {
        name: "Cardiology",
        icon: <FaHeartbeat />,
    },
    {
        name: "Neurology",
        icon: <FaBrain />,
    },
    {
        name: "Dental",
        icon: <FaTooth />,
    },
    {
        name: "Pediatrics",
        icon: <FaBaby />,
    },
    {
        name: "Orthopedics",
        icon: <FaBone />,
    },
    {
        name: "Emergency",
        icon: <FaAmbulance />,
    },
];

const DepartmentCards = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 p-6 text-slate-800 dark:text-white">

            <h2 className="text-xl font-bold mb-6">
                Departments
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

                {departments.map((item, index) => (

                    <div
                        key={index}
                        className="rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 duration-300 p-5 text-center cursor-pointer text-slate-800 dark:text-slate-200"
                    >

                        <div className="text-5xl text-blue-600 dark:text-blue-500 mb-4 flex justify-center">

                            {item.icon}

                        </div>

                        <h3 className="font-semibold">

                            {item.name}

                        </h3>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default DepartmentCards;