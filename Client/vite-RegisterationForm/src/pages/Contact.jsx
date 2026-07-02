import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaPaperPlane,
} from "react-icons/fa";
import Footer from "../components/Footer"; // adjust path if needed

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600">

            {/* ===== Hero ===== */}
            <section className="pt-32 pb-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                >
                    <h1 className="text-6xl font-bold text-white">Contact Us</h1>
                    <p className="text-white/80 text-lg mt-6 max-w-3xl mx-auto">
                        We'd love to hear from you. Contact our hospital for appointments,
                        emergencies or any medical assistance.
                    </p>
                </motion.div>
            </section>

            {/* ===== Contact Cards ===== */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20">
                        <FaPhoneAlt className="text-5xl text-pink-300 mx-auto" />
                        <h2 className="text-white text-2xl font-bold mt-6">Call Us</h2>
                        <p className="text-white/70 mt-4">+92 300 1234567</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20">
                        <FaEnvelope className="text-5xl text-pink-300 mx-auto" />
                        <h2 className="text-white text-2xl font-bold mt-6">Email</h2>
                        <p className="text-white/70 mt-4">hospital@gmail.com</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20">
                        <FaMapMarkerAlt className="text-5xl text-pink-300 mx-auto" />
                        <h2 className="text-white text-2xl font-bold mt-6">Address</h2>
                        <p className="text-white/70 mt-4">Peshawar, Pakistan</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20">
                        <FaClock className="text-5xl text-pink-300 mx-auto" />
                        <h2 className="text-white text-2xl font-bold mt-6">Working Hours</h2>
                        <p className="text-white/70 mt-4">24 / 7 Available</p>
                    </div>
                </div>
            </section>

            {/* ===== Contact Form + Map ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10">
                        <h2 className="text-4xl text-white font-bold">Send Message</h2>
                        <form className="mt-10 space-y-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl p-4 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-xl p-4 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-xl p-4 outline-none"
                            />
                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full rounded-xl p-4 outline-none resize-none"
                            />
                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-700 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 hover:scale-105 duration-300">
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=Peshawar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full min-h-[600px]"
                        />
                    </div>
                </div>
            </section>

            {/* ===== Why Contact Us ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center text-white mb-16">
                        Why Contact Our Hospital?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "🏥", title: "Modern Hospital", desc: "Advanced medical facilities with modern healthcare technology." },
                            { icon: "👨‍⚕️", title: "Expert Doctors", desc: "Highly experienced specialists available for every department." },
                            { icon: "🚑", title: "Emergency Care", desc: "Emergency medical services available 24 hours a day." },
                            { icon: "❤️", title: "Patient First", desc: "We always prioritize patient comfort and quality treatment." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:-translate-y-2 duration-300"
                            >
                                <div className="text-5xl">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-white mt-6">{item.title}</h3>
                                <p className="text-white/70 mt-4">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl text-white font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How can I book an appointment?",
                                a: "Visit our Appointment page, choose your doctor and select your preferred date and time."
                            },
                            {
                                q: "Do you provide emergency services?",
                                a: "Yes. Our emergency department operates 24 hours a day, 7 days a week."
                            },
                            {
                                q: "Can I contact doctors online?",
                                a: "Yes, online consultations are available for selected departments."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                            >
                                <h3 className="text-white text-xl font-bold">{faq.q}</h3>
                                <p className="text-white/70 mt-4">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Emergency Banner ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-pink-500 via-fuchsia-600 to-violet-700 rounded-[35px] p-16 text-center"
                    >
                        <h2 className="text-5xl font-bold text-white">
                            Emergency? Call Us Immediately
                        </h2>
                        <p className="text-white/80 mt-6 text-lg">
                            Our emergency response team is available 24/7 for urgent medical assistance.
                        </p>
                        <button className="mt-10 bg-white text-purple-700 px-10 py-4 rounded-xl font-bold hover:scale-105 duration-300">
                            📞 Call Now
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-xl rounded-[35px] border border-white/20 p-16 text-center"
                    >
                        <h2 className="text-5xl font-bold text-white">We're Here To Help</h2>
                        <p className="text-white/70 mt-6 text-lg">
                            Feel free to contact us anytime for appointments, emergency services or healthcare guidance.
                        </p>
                        <button className="mt-10 bg-gradient-to-r from-pink-500 to-purple-700 px-10 py-4 rounded-xl text-white font-bold hover:scale-105 duration-300">
                            Contact Hospital
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <Footer />
        </div>
    );
};

export default Contact;