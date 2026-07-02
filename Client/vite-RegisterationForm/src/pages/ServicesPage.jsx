import { motion } from "framer-motion";
import {
    FaHeartbeat,
    FaBrain,
    FaTooth,
    FaBone,
    FaEye,
    FaBaby,
} from "react-icons/fa";
import Footer from "../components/Footer"; // adjust path if needed

const services = [
    {
        id: 1,
        title: "Cardiology",
        icon: <FaHeartbeat size={45} />,
        desc: "Expert diagnosis and treatment for all heart-related diseases.",
    },
    {
        id: 2,
        title: "Neurology",
        icon: <FaBrain size={45} />,
        desc: "Specialized care for brain, nerves, and neurological disorders.",
    },
    {
        id: 3,
        title: "Orthopedic",
        icon: <FaBone size={45} />,
        desc: "Advanced bone, joint, and muscle treatment services.",
    },
    {
        id: 4,
        title: "Dental Care",
        icon: <FaTooth size={45} />,
        desc: "Complete dental checkups, cleaning, and cosmetic dentistry.",
    },
    {
        id: 5,
        title: "Eye Care",
        icon: <FaEye size={45} />,
        desc: "Professional eye examinations and vision care solutions.",
    },
    {
        id: 6,
        title: "Pediatrics",
        icon: <FaBaby size={45} />,
        desc: "Comprehensive healthcare services for infants and children.",
    },
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600">

            {/* ===== Hero ===== */}
            <section className="pt-32 pb-20 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl font-bold text-white">
                        Our Medical Services
                    </h1>
                    <p className="text-white/80 mt-6 max-w-3xl mx-auto text-lg">
                        We provide world-class healthcare with experienced doctors,
                        advanced medical equipment, and compassionate patient care.
                    </p>
                </motion.div>
            </section>

            {/* ===== Services Grid ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ y: -10, scale: 1.03 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-xl"
                        >
                            <div className="text-pink-300 flex justify-center">
                                {service.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-white mt-6">
                                {service.title}
                            </h2>
                            <p className="text-white/70 mt-5 leading-7">
                                {service.desc}
                            </p>
                            <button className="mt-8 bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white duration-300">
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Emergency Banner ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-pink-500 via-fuchsia-600 to-violet-700 rounded-[40px] p-12 lg:p-16 text-center shadow-2xl"
                    >
                        <h2 className="text-5xl font-bold text-white">
                            24/7 Emergency Medical Services
                        </h2>
                        <p className="text-white/80 mt-6 max-w-3xl mx-auto text-lg">
                            Our emergency department is available 24 hours a day with highly
                            qualified doctors, nurses, ambulances and modern medical equipment.
                        </p>
                        <button className="mt-10 bg-white text-purple-700 px-10 py-4 rounded-xl font-bold hover:scale-105 duration-300">
                            Call Emergency
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ===== Statistics ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { stat: "150+", label: "Expert Doctors" },
                        { stat: "25K+", label: "Happy Patients" },
                        { stat: "35+", label: "Medical Services" },
                        { stat: "15+", label: "Years Experience" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center"
                        >
                            <h2 className="text-5xl font-bold text-white">{item.stat}</h2>
                            <p className="text-white/70 mt-4">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Why Choose Us ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-5xl font-bold text-white mb-16">
                        Why Choose Our Hospital?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Experienced Doctors", desc: "Highly qualified specialists with years of experience." },
                            { title: "Modern Equipment", desc: "Latest medical technology for accurate diagnosis." },
                            { title: "24/7 Support", desc: "Emergency services available day and night." },
                            { title: "Patient Care", desc: "We always put our patients first." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 rounded-3xl backdrop-blur-xl p-8"
                            >
                                <h3 className="text-2xl text-white font-bold">{item.title}</h3>
                                <p className="text-white/70 mt-5">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl font-bold text-white mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How can I book an appointment?",
                                a: "Simply visit the Appointment page, choose your doctor, select a date and submit your booking."
                            },
                            {
                                q: "Do you provide emergency services?",
                                a: "Yes, our emergency department is open 24 hours a day."
                            },
                            {
                                q: "Can I consult doctors online?",
                                a: "Yes, online consultation is available for selected departments."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 rounded-2xl p-6"
                            >
                                <h3 className="text-white text-xl font-bold">{faq.q}</h3>
                                <p className="text-white/70 mt-4">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 rounded-[35px] p-16 text-center"
                    >
                        <h2 className="text-5xl font-bold text-white">
                            Ready To Take Care Of Your Health?
                        </h2>
                        <p className="text-white/80 mt-6 text-lg">
                            Book an appointment with our experienced doctors today and receive the best healthcare services.
                        </p>
                        <button className="mt-10 bg-white text-purple-700 px-10 py-4 rounded-xl font-bold hover:scale-105 duration-300">
                            Book Appointment
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <Footer />

        </div>
    );
};

export default ServicesPage;