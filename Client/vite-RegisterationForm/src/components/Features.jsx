import { motion } from "framer-motion";
import {
    FaUserMd,
    FaCalendarCheck,
    FaAmbulance,
    FaNotesMedical,
    FaHeartbeat,
    FaHospital,
} from "react-icons/fa";

const features = [
    {
        icon: <FaUserMd />,
        title: "Expert Doctors",
        desc: "Highly qualified and experienced specialists available for every department.",
    },
    {
        icon: <FaCalendarCheck />,
        title: "Easy Appointments",
        desc: "Book appointments online within seconds without waiting in long queues.",
    },
    {
        icon: <FaAmbulance />,
        title: "24/7 Emergency",
        desc: "Emergency services available day and night with rapid response.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Digital Reports",
        desc: "Access your laboratory reports and prescriptions online anytime.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Health Monitoring",
        desc: "Track your health records and treatment history securely.",
    },
    {
        icon: <FaHospital />,
        title: "Modern Facilities",
        desc: "Advanced equipment and world-class infrastructure for quality treatment.",
    },
];

const Features = () => {
    return (
        <section className="py-24 relative">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <p className="uppercase tracking-[6px] text-pink-200 font-semibold">
                        Our Features
                    </p>

                    <h2 className="text-5xl font-bold text-white mt-4">

                        Why Choose Us?

                    </h2>

                    <p className="text-white/70 mt-6 max-w-3xl mx-auto leading-8">

                        We provide complete healthcare solutions with modern technology,
                        professional doctors and secure digital services.

                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .6,
                                delay: index * .1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                            }}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:border-pink-300 duration-300"
                        >

                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl text-purple-700 mb-6">

                                {item.icon}

                            </div>

                            <h3 className="text-2xl font-bold text-white">

                                {item.title}

                            </h3>

                            <p className="text-white/70 mt-4 leading-7">

                                {item.desc}

                            </p>

                            <button className="mt-8 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-pink-300 hover:text-white duration-300">

                                Learn More

                            </button>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Features;