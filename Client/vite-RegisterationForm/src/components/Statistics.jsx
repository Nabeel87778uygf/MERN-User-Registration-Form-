import { motion } from "framer-motion";
import {
    FaUserMd,
    FaUsers,
    FaHospital,
    FaAward,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaUserMd />,
        number: "250+",
        title: "Expert Doctors",
    },
    {
        icon: <FaUsers />,
        number: "15K+",
        title: "Happy Patients",
    },
    {
        icon: <FaHospital />,
        number: "35+",
        title: "Departments",
    },
    {
        icon: <FaAward />,
        number: "20+",
        title: "Years Experience",
    },
];

const Statistics = () => {
    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <p className="uppercase tracking-[5px] text-pink-200">

                        Statistics

                    </p>

                    <h2 className="text-5xl font-bold text-white mt-4">

                        Our Achievements

                    </h2>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center"
                        >

                            <div className="text-5xl text-pink-300 flex justify-center">

                                {item.icon}

                            </div>

                            <h2 className="text-5xl font-bold text-white mt-5">

                                {item.number}

                            </h2>

                            <p className="text-white/70 mt-3">

                                {item.title}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Statistics;