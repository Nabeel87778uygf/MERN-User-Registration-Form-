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


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:7000/api/auth/login",
                formData
            );

            console.log(response.data);


            // Save Token
            localStorage.setItem(
                "token",
                response.data.token
            );


            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            Swal.fire({

                title: "Login Successful 🎉",
                text: "Welcome back!",
                icon: "success",
                confirmButtonText: "Continue",
                confirmButtonColor: "#4f46e5",

            }).then(() => {

                navigate("/");

            });


        } catch (error) {
            console.log(error.response?.data);

            Swal.fire({

                title: "Login Failed ❌",
                text:
                    error.response?.data?.message ||
                    "Invalid email or password",

                icon: "error",
                confirmButtonColor: "#ef4444",

            });


        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">

                    <h1 className="text-4xl font-extrabold text-white">

                        Welcome Back 👋

                    </h1>

                    <p className="text-gray-200 mt-2">

                        Login to continue your journey 🚀

                    </p>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">

                    {/* Email */}

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


                    {/* Button */}

                    <button

                        type="submit"

                        className="w-full bg-white text-indigo-700 font-bold py-3 rounded-xl hover:bg-indigo-100 transition duration-300 shadow-lg hover:scale-105"

                    >

                        Login

                    </button>

                </form>

                {/* Register */}

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