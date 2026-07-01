import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Frontend Data:", formData);
        try {

            const response = await axios.post(
                "http://localhost:7000/api/auth/register",
                formData
            );

            console.log(response.data);
            Swal.fire({
                title: "Registration Successful 🎉",
                text: "Your account has been created successfully!",
                icon: "success",
                confirmButtonText: "Go to Login",
                confirmButtonColor: "#4f46e5",
            }).then(() => {
                navigate("/login");
            });
        } catch (error) {
            console.log(error.response?.data);
            Swal.fire({
                title: "Registration Failed",
                text: "Registration failed. Please try again.",
                icon: "error",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4 py-10">

            {/* Card */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-white">
                        Create Account
                    </h1>

                    <p className="text-gray-200 mt-2">
                        Join us and start your journey 🚀
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="XYZ"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="XYZ@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="********"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        onClick={() => navigate("/register")}
                        className="w-full bg-white text-indigo-700 font-bold py-3 rounded-xl hover:bg-indigo-100 transition duration-300 shadow-lg hover:scale-105"
                    >
                        Create Account
                    </button>

                </form>

                {/* Login */}
                <p className="text-center text-gray-200 mt-8">
                    Already have an account?
                    <span
                        onClick={() => navigate("/login")}
                        className="text-white font-semibold cursor-pointer hover:underline ml-2">
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
};

export default Register;