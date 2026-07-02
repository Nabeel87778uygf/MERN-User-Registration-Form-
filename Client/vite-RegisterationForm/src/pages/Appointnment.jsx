import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaCalendarAlt,
    FaUserMd,
    FaUser,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment Booked Successfully!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600">

            {/* Hero */}
            <section className="pt-32 pb-16 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl font-bold text-white">
                        Book Appointment
                    </h1>
                    <p className="text-white/80 mt-6 max-w-2xl mx-auto">
                        Schedule your appointment with our experienced doctors in just a
                        few clicks.
                    </p>
                </motion.div>
            </section>

            {/* Form */}
            <section className="pb-20 px-6">
                <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10">

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Name */}
                        <div>
                            <label className="text-white block mb-2">
                                Full Name
                            </label>
                            <div className="flex items-center bg-white rounded-xl px-4">
                                <FaUser className="text-purple-600" />
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    className="w-full p-4 outline-none rounded-xl"
                                    placeholder="Enter Name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-white block mb-2">
                                Email
                            </label>
                            <div className="flex items-center bg-white rounded-xl px-4">
                                <FaEnvelope className="text-purple-600" />
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    className="w-full p-4 outline-none rounded-xl"
                                    placeholder="Enter Email"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-white block mb-2">
                                Phone
                            </label>
                            <div className="flex items-center bg-white rounded-xl px-4">
                                <FaPhone className="text-purple-600" />
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    className="w-full p-4 outline-none rounded-xl"
                                    placeholder="03XXXXXXXXX"
                                />
                            </div>
                        </div>

                        {/* Department */}
                        <div>
                            <label className="text-white block mb-2">
                                Department
                            </label>
                            <select
                                name="department"
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl outline-none"
                            >
                                <option>Select Department</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Orthopedic</option>
                                <option>Dental</option>
                            </select>
                        </div>

                        {/* Doctor */}
                        <div>
                            <label className="text-white block mb-2">
                                Doctor
                            </label>
                            <div className="flex items-center bg-white rounded-xl px-4">
                                <FaUserMd className="text-purple-600" />
                                <select
                                    name="doctor"
                                    onChange={handleChange}
                                    className="w-full p-4 outline-none"
                                >
                                    <option>Select Doctor</option>
                                    <option>Dr. Ahmed Khan</option>
                                    <option>Dr. Sarah Ali</option>
                                    <option>Dr. Umar Shah</option>
                                </select>
                            </div>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="text-white block mb-2">
                                Appointment Date
                            </label>
                            <div className="flex items-center bg-white rounded-xl px-4">
                                <FaCalendarAlt className="text-purple-600" />
                                <input
                                    type="date"
                                    name="date"
                                    onChange={handleChange}
                                    className="w-full p-4 outline-none"
                                />
                            </div>
                        </div>

                        {/* ✅ Time (added) */}
                        <div>
                            <label className="text-white block mb-2">
                                Preferred Time
                            </label>
                            <select
                                name="time"
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl outline-none"
                            >
                                <option>Select Time</option>
                                <option>09:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 PM</option>
                                <option>02:00 PM</option>
                                <option>03:00 PM</option>
                                <option>04:00 PM</option>
                            </select>
                        </div>

                        {/* ✅ Symptoms / Notes (full width) */}
                        <div className="md:col-span-2">
                            <label className="text-white block mb-2">
                                Symptoms / Notes
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Describe your symptoms..."
                                className="w-full rounded-xl p-4 outline-none resize-none"
                            ></textarea>
                        </div>

                        {/* ✅ Submit Button (full width) */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold text-lg hover:scale-105 duration-300"
                            >
                                Book Appointment
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
};

export default Appointment;