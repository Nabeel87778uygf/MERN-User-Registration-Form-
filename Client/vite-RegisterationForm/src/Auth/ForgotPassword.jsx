import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:7000/api/auth/send-otp", { email });

            Swal.fire({
                title: "OTP Sent!",
                text: "6-digit code has been sent to your email.",
                icon: "success",
                confirmButtonColor: "#4f46e5"
            }).then(() => {
                navigate("/verify-otp", { state: { email } });
            });
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error.response?.data?.message || "Something went wrong.",
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white text-center mb-4">Forgot Password</h2>
                <p className="text-gray-200 text-center mb-6 text-sm">Enter your email to receive a secure OTP code.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-white mb-2 font-medium">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="xyz@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-purple-900/60 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-indigo-700 font-bold py-3 rounded-xl hover:bg-indigo-100 transition shadow-lg hover:scale-105"
                    >
                        {loading ? "Sending OTP..." : "Send OTP"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;