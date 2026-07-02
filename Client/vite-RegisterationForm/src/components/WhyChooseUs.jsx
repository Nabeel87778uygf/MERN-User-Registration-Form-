import { motion } from "framer-motion";
const hospital = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80";
import {
    FaCheckCircle,
} from "react-icons/fa";

const WhyChooseUs = () => {

    const reasons = [

        "Qualified & Experienced Doctors",

        "24/7 Emergency Services",

        "Online Appointment Booking",

        "Modern Medical Equipment",

        "Digital Patient Records",

        "Affordable Healthcare",

    ];

    return (

        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >

                        <img
                            src={hospital}
                            alt="Hospital"
                            className="w-full"
                        />

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >

                        <p className="uppercase tracking-[5px] text-pink-200 font-semibold">

                            Why Choose Us

                        </p>

                        <h2 className="text-5xl font-bold text-white mt-4">

                            We Care About

                            <span className="block text-pink-300">

                                Your Health

                            </span>

                        </h2>

                        <p className="text-white/70 mt-8 leading-8">

                            Our hospital combines compassionate healthcare with advanced
                            technology to ensure every patient receives the highest quality
                            treatment.

                        </p>

                        <div className="grid sm:grid-cols-2 gap-5 mt-10">

                            {reasons.map((reason, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-4 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4"
                                >

                                    <FaCheckCircle className="text-pink-300 text-xl" />

                                    <span className="text-white">

                                        {reason}

                                    </span>

                                </div>

                            ))}

                        </div>

                        <button className="mt-10 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300">

                            Learn More

                        </button>

                    </motion.div>

                </div>

            </div>

        </section>

    );

};

export default WhyChooseUs;