import {
    FaUserInjured,
    FaUserMd,
    FaCalendarCheck,
    FaBed,
    FaMoneyBillWave,
    FaAmbulance
} from "react-icons/fa";

import StatsCard from "../cards/StatsCard";

const DashboardStats = () => {

    const stats = [

        {
            title: "Total Patients",
            value: "2,458",
            increase: "12%",
            color: "bg-blue-600",
            icon: <FaUserInjured />
        },

        {
            title: "Doctors",
            value: "125",
            increase: "5%",
            color: "bg-cyan-600",
            icon: <FaUserMd />
        },

        {
            title: "Appointments",
            value: "324",
            increase: "18%",
            color: "bg-green-600",
            icon: <FaCalendarCheck />
        },

        {
            title: "Available Beds",
            value: "84",
            increase: "7%",
            color: "bg-purple-600",
            icon: <FaBed />
        },

        {
            title: "Revenue",
            value: "$48K",
            increase: "20%",
            color: "bg-orange-500",
            icon: <FaMoneyBillWave />
        },

        {
            title: "Emergency",
            value: "15",
            increase: "2%",
            color: "bg-red-500",
            icon: <FaAmbulance />
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {
                stats.map((item, index) => (

                    <StatsCard
                        key={index}
                        title={item.title}
                        value={item.value}
                        increase={item.increase}
                        color={item.color}
                        icon={item.icon}
                    />

                ))
            }

        </div>

    )

}

export default DashboardStats;