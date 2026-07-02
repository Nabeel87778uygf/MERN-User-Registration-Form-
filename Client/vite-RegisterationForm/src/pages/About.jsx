import { motion } from "framer-motion";
import {
    FaHospital,
    FaHeartbeat,
    FaUserMd,
    FaAward,
} from "react-icons/fa";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaArrowRight,
} from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600">

            {/* Hero Section */}

            <section className="pt-36 pb-24 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <span className="uppercase tracking-[6px] text-pink-200 font-semibold">

                            About Our Hospital

                        </span>

                        <h1 className="text-6xl font-bold text-white mt-6 leading-tight">

                            Modern Healthcare

                            <span className="block text-pink-300">

                                For Everyone

                            </span>

                        </h1>

                        <p className="text-white/80 mt-8 text-lg leading-9">

                            Our Hospital Management System provides advanced healthcare
                            solutions with experienced doctors, online appointments,
                            secure medical records and patient-centered care.

                        </p>

                        <div className="flex gap-5 mt-10 flex-wrap">

                            <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300">

                                Learn More

                            </button>

                            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 duration-300">

                                Contact Us

                            </button>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-12">

                            <img

                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900"

                                className="rounded-3xl"

                                alt="Hospital"

                            />

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* Story */}

            <section className="py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <motion.div

                        initial={{ opacity: 0, y: 80 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        transition={{ duration: .8 }}

                        className="text-center"

                    >

                        <h2 className="text-5xl font-bold text-white">

                            Our Story

                        </h2>

                        <p className="text-white/70 mt-8 max-w-4xl mx-auto text-lg leading-9">

                            Since our establishment, we have been committed to providing
                            high-quality healthcare services using advanced technology
                            and compassionate medical professionals.

                            Every patient receives personalized treatment and continuous
                            support throughout their healthcare journey.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* Mission Vision */}

            <section className="pb-24 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Mission */}

                    <motion.div

                        whileHover={{ y: -10 }}

                        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10"

                    >

                        <FaHeartbeat className="text-6xl text-pink-300" />

                        <h2 className="text-white text-3xl font-bold mt-8">

                            Our Mission

                        </h2>

                        <p className="text-white/70 mt-6 leading-8">

                            To provide accessible, affordable and high-quality healthcare
                            services while ensuring every patient receives compassionate
                            treatment with modern medical technology.

                        </p>

                    </motion.div>

                    {/* Vision */}

                    <motion.div

                        whileHover={{ y: -10 }}

                        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10"

                    >

                        <FaHospital className="text-6xl text-pink-300" />

                        <h2 className="text-white text-3xl font-bold mt-8">

                            Our Vision

                        </h2>

                        <p className="text-white/70 mt-6 leading-8">

                            To become one of the leading healthcare providers by delivering
                            innovative, patient-focused medical services with excellence
                            and trust.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= WHY CHOOSE US ================= */}

            <section className="py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >

                        <span className="uppercase tracking-[6px] text-pink-200 font-semibold">

                            Why Choose Us

                        </span>

                        <h2 className="text-5xl font-bold text-white mt-5">

                            Healthcare You Can Trust

                        </h2>

                        <p className="text-white/70 mt-6 max-w-3xl mx-auto leading-8">

                            We combine modern technology with compassionate healthcare to
                            provide the best treatment experience for every patient.

                        </p>

                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:-translate-y-3 duration-300">

                            <FaUserMd className="text-5xl text-pink-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Expert Doctors

                            </h3>

                            <p className="text-white/70 mt-4">

                                Experienced specialists across all medical departments.

                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:-translate-y-3 duration-300">

                            <FaHeartbeat className="text-5xl text-pink-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Emergency Care

                            </h3>

                            <p className="text-white/70 mt-4">

                                24/7 emergency support with rapid response teams.

                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:-translate-y-3 duration-300">

                            <FaHospital className="text-5xl text-pink-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Modern Facilities

                            </h3>

                            <p className="text-white/70 mt-4">

                                Latest medical equipment and digital healthcare solutions.

                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:-translate-y-3 duration-300">

                            <FaAward className="text-5xl text-pink-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Award Winning

                            </h3>

                            <p className="text-white/70 mt-4">

                                Recognized for excellence in patient care and innovation.

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================= STATISTICS ================= */}

            <section className="pb-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-gradient-to-r from-pink-500 to-purple-700 rounded-3xl p-10 text-center">

                            <h2 className="text-5xl font-bold text-white">

                                250+

                            </h2>

                            <p className="text-white mt-4">

                                Expert Doctors

                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-pink-500 to-purple-700 rounded-3xl p-10 text-center">

                            <h2 className="text-5xl font-bold text-white">

                                15K+

                            </h2>

                            <p className="text-white mt-4">

                                Happy Patients

                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-pink-500 to-purple-700 rounded-3xl p-10 text-center">

                            <h2 className="text-5xl font-bold text-white">

                                35+

                            </h2>

                            <p className="text-white mt-4">

                                Medical Departments

                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-pink-500 to-purple-700 rounded-3xl p-10 text-center">

                            <h2 className="text-5xl font-bold text-white">

                                20+

                            </h2>

                            <p className="text-white mt-4">

                                Years Experience

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================= AWARDS ================= */}

            <section className="pb-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl text-white font-bold">

                            Awards & Recognition

                        </h2>

                        <p className="text-white/70 mt-6">

                            Recognized nationally for excellence in healthcare.

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">

                            <FaAward className="text-6xl text-yellow-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Best Hospital 2025

                            </h3>

                            <p className="text-white/70 mt-5">

                                Awarded for outstanding patient satisfaction.

                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">

                            <FaAward className="text-6xl text-pink-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Digital Innovation

                            </h3>

                            <p className="text-white/70 mt-5">

                                Excellence in healthcare technology.

                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">

                            <FaAward className="text-6xl text-green-300" />

                            <h3 className="text-white text-2xl font-bold mt-6">

                                Trusted Healthcare

                            </h3>

                            <p className="text-white/70 mt-5">

                                Trusted by thousands of families every year.

                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= OUR TEAM ================= */}

            <section className="py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <span className="uppercase tracking-[6px] text-pink-200">

                            Our Team

                        </span>

                        <h2 className="text-5xl font-bold text-white mt-5">

                            Meet Our Specialists

                        </h2>

                        <p className="text-white/70 mt-6">

                            Dedicated professionals committed to your health.

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">

                        {[
                            {
                                name: "Dr. Ahmed Khan",
                                role: "Cardiologist",
                                image:
                                    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
                            },
                            {
                                name: "Dr. Sarah Ali",
                                role: "Neurologist",
                                image:
                                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
                            },
                            {
                                name: "Dr. Umar Shah",
                                role: "Orthopedic",
                                image:
                                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
                            },
                        ].map((doctor, index) => (

                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:-translate-y-3 duration-300"
                            >

                                <img
                                    src={doctor.image}
                                    className="w-full h-96 object-cover"
                                />

                                <div className="p-8">

                                    <h3 className="text-white text-2xl font-bold">

                                        {doctor.name}

                                    </h3>

                                    <p className="text-pink-300 mt-2">

                                        {doctor.role}

                                    </p>

                                    <div className="flex gap-4 mt-6">

                                        <div className="bg-white/10 p-3 rounded-full">

                                            <FaFacebookF className="text-white" />

                                        </div>

                                        <div className="bg-white/10 p-3 rounded-full">

                                            <FaInstagram className="text-white" />

                                        </div>

                                        <div className="bg-white/10 p-3 rounded-full">

                                            <FaLinkedinIn className="text-white" />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= TIMELINE ================= */}

            <section className="pb-24 px-6">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold text-white">

                            Hospital Journey

                        </h2>

                    </div>

                    <div className="space-y-8">

                        {[
                            "2010 - Hospital Established",
                            "2015 - 100+ Doctors Joined",
                            "2018 - ICU Expansion",
                            "2022 - Digital Healthcare System",
                            "2026 - AI Hospital Management",
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-white text-xl font-semibold hover:translate-x-3 duration-300"
                            >

                                {item}

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= TESTIMONIALS ================= */}

            <section className="pb-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold text-white">

                            Patient Reviews

                        </h2>

                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {[
                            {
                                name: "Ali Khan",
                                review: "Excellent doctors and wonderful treatment."
                            },
                            {
                                name: "Sara Ahmed",
                                review: "Best hospital experience I've ever had."
                            },
                            {
                                name: "Usman",
                                review: "Highly professional staff and modern facilities."
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10"
                            >

                                <div className="text-yellow-300 text-2xl">

                                    ★★★★★

                                </div>

                                <p className="text-white/70 mt-6">

                                    "{item.review}"

                                </p>

                                <h3 className="text-white font-bold mt-8">

                                    {item.name}

                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>



            {/* ================= CTA ================= */}

            <section className="pb-24 px-6">

                <div className="max-w-6xl mx-auto">

                    <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-[40px] p-16 text-center">

                        <h2 className="text-5xl text-white font-bold">

                            Your Health Is Our Priority

                        </h2>

                        <p className="text-white/80 mt-6 text-lg">

                            Book an appointment today with our experienced doctors.

                        </p>

                        <button className="mt-10 bg-white text-purple-700 px-10 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:scale-105 duration-300">

                            Book Appointment

                            <FaArrowRight />

                        </button>

                    </div>

                </div>

            </section>


        </div>
    );
};

export default About;