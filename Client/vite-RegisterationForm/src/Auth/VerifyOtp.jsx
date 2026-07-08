import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email || "";

    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReset = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            return Swal.fire("Error", "Passwords do not match!", "error");
        }

        setLoading(true);
        try {
            await axios.post("http://localhost:7000/api/auth/verify-otp-reset-password", {
                email,
                otp,
                newPassword
            });

            Swal.fire({
                title: "Password Updated! 🎉",
                text: "Your new password is active now.",
                icon: "success",
                confirmButtonColor: "#4f46e5"
            }).then(() => {
                navigate("/login");
            });
        } catch (error) {
            Swal.fire({
                title: "Verification Failed",
                text: error.response?.data?.message || "Invalid or Expired OTP.",
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white text-center mb-2">Verify OTP</h2>
                <p className="text-gray-200 text-center mb-6 text-xs">Resetting for: <span className="font-semibold text-white">{email}</span></p>

                <form onSubmit={handleReset} className="space-y-4">
                    {/* OTP Input */}
                    <div>
                        <label className="block text-white mb-1 font-medium text-sm">6-Digit Code</label>
                        <input
                            type="text"
                            maxLength="6"
                            required
                            placeholder="000000"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full text-center tracking-widest text-xl font-bold px-4 py-2 rounded-xl bg-purple-900/60 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-white mb-1 font-medium text-sm">New Password</label>
                        <input
                            type="password"
                            required
                            placeholder="********"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-purple-900/60 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-white mb-1 font-medium text-sm">Confirm Password</label>
                        <input
                            type="password"
                            required
                            placeholder="********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-purple-900/60 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-indigo-700 font-bold py-3 rounded-xl hover:bg-indigo-100 transition shadow-lg hover:scale-105 mt-2"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;