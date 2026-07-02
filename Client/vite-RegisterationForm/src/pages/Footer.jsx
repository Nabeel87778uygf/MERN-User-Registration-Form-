import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeartbeat,
} from "react-icons/fa";

import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-300 mt-24">

            {/* Top */}

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Logo */}

                <div>

                    <div className="flex items-center gap-3 mb-5">

                        <div className="bg-blue-600 p-3 rounded-xl">
                            <FaHeartbeat className="text-white text-2xl" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                MediCare
                            </h2>

                            <p className="text-blue-400 text-sm">
                                Health First
                            </p>

                        </div>

                    </div>

                    <p className="leading-7 text-gray-400">
                        We provide world-class healthcare services with experienced
                        doctors, modern equipment, and compassionate care for every
                        patient.
                    </p>

                    <div className="flex gap-4 mt-7">

                        {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                            (Icon, index) => (
                                <div
                                    key={index}
                                    className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 duration-300 flex items-center justify-center cursor-pointer"
                                >
                                    <Icon />
                                </div>
                            )
                        )}

                    </div>

                </div>

                {/* Quick Links */}

                <div>

                    <h3 className="text-white text-xl font-semibold mb-6">
                        Quick Links
                    </h3>

                    <div className="space-y-4">

                        {[
                            "Home",
                            "About",
                            "Services",
                            "Doctors",
                            "Appointment",
                            "Contact",
                        ].map((item) => (
                            <Link
                                key={item}
                                className="block hover:text-cyan-400 duration-300"
                            >
                                {item}
                            </Link>
                        ))}

                    </div>

                </div>

                {/* Services */}

                <div>

                    <h3 className="text-white text-xl font-semibold mb-6">
                        Our Services
                    </h3>

                    <div className="space-y-4">

                        {[
                            "Cardiology",
                            "Dental Care",
                            "Neurology",
                            "Emergency",
                            "Laboratory",
                            "Pediatrics",
                        ].map((item) => (
                            <p
                                key={item}
                                className="hover:text-cyan-400 duration-300 cursor-pointer"
                            >
                                {item}
                            </p>
                        ))}

                    </div>

                </div>

                {/* Contact */}

                <div>

                    <h3 className="text-white text-xl font-semibold mb-6">
                        Contact
                    </h3>

                    <div className="space-y-5">

                        <div className="flex gap-4">
                            <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                            <p>Islamabad, Pakistan</p>
                        </div>

                        <div className="flex gap-4">
                            <FaPhoneAlt className="text-cyan-400 mt-1" />
                            <p>+92 300 1234567</p>
                        </div>

                        <div className="flex gap-4">
                            <FaEnvelope className="text-cyan-400 mt-1" />
                            <p>support@medicare.com</p>
                        </div>

                        <div className="flex gap-4">
                            <MdAccessTime className="text-cyan-400 mt-1" />
                            <p>24/7 Emergency Service</p>
                        </div>

                    </div>

                    {/* Newsletter */}

                    <div className="mt-8">

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-slate-800 rounded-lg px-4 py-3 outline-none border border-slate-700 focus:border-blue-500"
                        />

                        <button className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 duration-300 text-white font-semibold">

                            Subscribe

                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-slate-800">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-sm">
                        © 2026 MediCare Hospital. All Rights Reserved.
                    </p>

                    <div className="flex gap-8 mt-4 md:mt-0">

                        <Link className="hover:text-cyan-400">
                            Privacy Policy
                        </Link>

                        <Link className="hover:text-cyan-400">
                            Terms
                        </Link>

                        <Link className="hover:text-cyan-400">
                            Support
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}