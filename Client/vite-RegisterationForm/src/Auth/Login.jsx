import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        try {
            const { data } = await axios.post(
                "http://localhost:7000/api/auth/login",
                formData,
                {
                    withCredentials: true,
                }
            );

            // Temporary (Phase 1)
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            Swal.fire({
                title: "Login Successful 🎉",
                text: `Welcome ${data.user.fullName}!`,
                icon: "success",
                confirmButtonText: "Continue",
                confirmButtonColor: "#4f46e5",
            }).then(() => {
                if (data.user.role === "admin") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/home");
                }
            });

        } catch (error) {
            Swal.fire({
                title: "Login Failed",
                text:
                    error.response?.data?.message ||
                    "Invalid email or password.",
                icon: "error",
                confirmButtonColor: "#ef4444",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-white">
                        Welcome Back
                    </h1>

                    <p className="text-gray-200 mt-2">
                        Login to continue your journey
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email Input */}
                    <div>
                        <label className="block text-white mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            className="w-full px-4 py-3 rounded-xl bg-purple-900/60 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                    </div>

                    {/* Password Input */}
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
                            required
                            autoComplete="current-password"
                            className="w-full px-4 py-3 rounded-xl bg-purple-900/60 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                    </div>


                    <div className="text-right !mt-2">
                        <span
                            onClick={() => navigate("/forgot-password")}
                            className="text-sm text-gray-200 hover:text-white font-medium cursor-pointer hover:underline transition"
                        >
                            Forgot Password?
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-indigo-700 font-bold py-3 rounded-xl hover:bg-indigo-100 transition duration-300 shadow-lg hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>

                </form>

                <p className="text-center text-gray-200 mt-8">
                    Don't have an account?
                    <span
                        onClick={() => navigate("/register")}
                        className="text-white font-semibold cursor-pointer hover:underline ml-2"
                    >
                        Create Account
                    </span>
                </p>

            </div>

        </div>
    );
};

export default Login;