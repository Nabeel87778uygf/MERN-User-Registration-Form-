import { motion } from "framer-motion";
import {
    FaAmbulance,
    FaUserMd,
    FaStethoscope,
    FaNotesMedical,
    FaSyringe,
    FaHeartbeat,
} from "react-icons/fa";

const services = [
    {
        icon: <FaAmbulance />,
        title: "Emergency Care",
        desc: "24/7 emergency medical support with experienced staff.",
    },
    {
        icon: <FaUserMd />,
        title: "Doctor Consultation",
        desc: "Consult highly qualified doctors anytime.",
    },
    {
        icon: <FaStethoscope />,
        title: "Medical Checkup",
        desc: "Complete health examination with modern equipment.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Laboratory",
        desc: "Fast and accurate laboratory testing services.",
    },
    {
        icon: <FaSyringe />,
        title: "Vaccination",
        desc: "Safe vaccination services for all age groups.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Heart Care",
        desc: "Advanced cardiac treatment and monitoring.",
    },
];

const Services = () => {
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

                    <p className="uppercase tracking-[5px] text-pink-200 font-semibold">
                        Our Services
                    </p>

                    <h2 className="text-5xl font-bold text-white mt-4">
                        Healthcare Services
                    </h2>

                    <p className="text-white/70 mt-5 max-w-3xl mx-auto">
                        We provide complete healthcare solutions using advanced medical
                        technology and experienced specialists.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .6,
                                delay: index * .1
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.03
                            }}
                            viewport={{ once: true }}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl"
                        >

                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-purple-700 text-3xl">

                                {service.icon}

                            </div>

                            <h3 className="text-white text-2xl font-bold mt-6">

                                {service.title}

                            </h3>

                            <p className="text-white/70 mt-4 leading-7">

                                {service.desc}

                            </p>

                            <button className="mt-8 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-pink-300 hover:text-white duration-300">

                                Read More

                            </button>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Services;