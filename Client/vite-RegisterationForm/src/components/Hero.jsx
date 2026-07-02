import { motion } from "framer-motion";
import {
    FaCalendarCheck,
    FaUserMd,
    FaHeartbeat,
    FaArrowRight,
} from "react-icons/fa";

import doctor from "../assets/doctor.png";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-20">

            {/* Background Blur Circle */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <p className="text-pink-200 font-semibold uppercase tracking-widest mb-3">
                            Welcome to
                        </p>

                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">

                            Hospital

                            <span className="block text-pink-300">

                                Management System

                            </span>

                        </h1>

                        <p className="text-white/80 text-lg mt-8 leading-8">

                            Experience modern healthcare with online appointments,
                            professional doctors, digital reports and emergency support
                            — all in one secure platform.

                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">

                            <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 duration-300">

                                Book Appointment

                                <FaArrowRight />

                            </button>

                            <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-700 duration-300">

                                Explore Services

                            </button>

                        </div>

                        {/* Feature Cards */}

                        <div className="grid grid-cols-3 gap-4 mt-14">

                            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 text-center">

                                <FaUserMd className="text-3xl text-pink-300 mx-auto" />

                                <h3 className="text-white mt-3 font-bold">

                                    250+

                                </h3>

                                <p className="text-white/70 text-sm">

                                    Doctors

                                </p>

                            </div>

                            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 text-center">

                                <FaCalendarCheck className="text-3xl text-pink-300 mx-auto" />

                                <h3 className="text-white mt-3 font-bold">

                                    15K+

                                </h3>

                                <p className="text-white/70 text-sm">

                                    Patients

                                </p>

                            </div>

                            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 text-center">

                                <FaHeartbeat className="text-3xl text-pink-300 mx-auto" />

                                <h3 className="text-white mt-3 font-bold">

                                    24/7

                                </h3>

                                <p className="text-white/70 text-sm">

                                    Emergency

                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        className="relative flex justify-center"
                    >

                        <img
                            src={doctor}
                            alt="Doctor"
                            className="w-full max-w-lg drop-shadow-2xl"
                        />

                        {/* Floating Card */}

                        <div className="absolute top-10 left-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4">

                            <p className="text-white font-bold">

                                👨‍⚕️ Expert Doctors

                            </p>

                            <p className="text-white/70 text-sm">

                                Certified Specialists

                            </p>

                        </div>

                        <div className="absolute bottom-10 right-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4">

                            <p className="text-white font-bold">

                                ⭐ 4.9 Rating

                            </p>

                            <p className="text-white/70 text-sm">

                                Trusted by Patients

                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default Hero;