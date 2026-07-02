import { motion } from "framer-motion";
import {
    FaUserEdit,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaTint,
    FaBirthdayCake,
} from "react-icons/fa";

const Profile = () => {
    const user = {
        name: "Nabeel Ahmad",
        email: "nabeel@example.com",
        phone: "+92 300 1234567",
        age: 23,
        blood: "B+",
        address: "Peshawar, Pakistan",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600 pt-28 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold text-white">My Profile</h1>
                    <p className="text-white/80 mt-4 text-lg">
                        Manage your personal information and appointments.
                    </p>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
                >
                    <div className="grid lg:grid-cols-3 gap-10 items-center">
                        {/* Left */}
                        <div className="text-center">
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-52 h-52 rounded-full mx-auto object-cover border-4 border-pink-400 shadow-xl"
                            />
                            <h2 className="text-3xl text-white font-bold mt-6">
                                {user.name}
                            </h2>
                            <p className="text-pink-300 mt-2">Registered Patient</p>
                            <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-700 text-white px-8 py-3 rounded-xl flex items-center gap-3 mx-auto hover:scale-105 duration-300">
                                <FaUserEdit />
                                Edit Profile
                            </button>
                        </div>

                        {/* Right */}
                        <div className="lg:col-span-2">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 text-pink-300 mb-3">
                                        <FaEnvelope />
                                        <span>Email</span>
                                    </div>
                                    <h3 className="text-white text-lg">{user.email}</h3>
                                </div>

                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 text-pink-300 mb-3">
                                        <FaPhone />
                                        <span>Phone</span>
                                    </div>
                                    <h3 className="text-white text-lg">{user.phone}</h3>
                                </div>

                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 text-pink-300 mb-3">
                                        <FaBirthdayCake />
                                        <span>Age</span>
                                    </div>
                                    <h3 className="text-white text-lg">{user.age} Years</h3>
                                </div>

                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 text-pink-300 mb-3">
                                        <FaTint />
                                        <span>Blood Group</span>
                                    </div>
                                    <h3 className="text-white text-lg">{user.blood}</h3>
                                </div>

                                <div className="md:col-span-2 bg-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 text-pink-300 mb-3">
                                        <FaMapMarkerAlt />
                                        <span>Address</span>
                                    </div>
                                    <h3 className="text-white text-lg">{user.address}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ================= Upcoming Appointments ================= */}
                <section className="mt-14">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Upcoming Appointments
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                            <h3 className="text-2xl text-white font-bold">
                                Dr. Ahmed Khan
                            </h3>
                            <p className="text-pink-300 mt-2">Cardiologist</p>
                            <div className="mt-5 space-y-2 text-white/80">
                                <p>📅 15 July 2026</p>
                                <p>🕒 10:30 AM</p>
                                <p>🏥 Room 203</p>
                            </div>
                            <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-700 py-3 rounded-xl text-white font-semibold">
                                View Details
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                            <h3 className="text-2xl text-white font-bold">
                                Dr. Sarah Ali
                            </h3>
                            <p className="text-pink-300 mt-2">Neurologist</p>
                            <div className="mt-5 space-y-2 text-white/80">
                                <p>📅 20 July 2026</p>
                                <p>🕒 01:00 PM</p>
                                <p>🏥 Room 108</p>
                            </div>
                            <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-700 py-3 rounded-xl text-white font-semibold">
                                View Details
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================= Favorite Doctors ================= */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Favorite Doctors
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Dr. Ahmed Khan",
                                speciality: "Cardiology",
                                image:
                                    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
                            },
                            {
                                name: "Dr. Sarah Ali",
                                speciality: "Neurology",
                                image:
                                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
                            },
                            {
                                name: "Dr. Umar Shah",
                                speciality: "Orthopedic",
                                image:
                                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500",
                            },
                        ].map((doctor, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:-translate-y-2 duration-300"
                            >
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl text-white font-bold">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-pink-300 mt-2">{doctor.speciality}</p>
                                    <button className="mt-6 w-full bg-white text-purple-700 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white duration-300">
                                        Book Again
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= Settings ================= */}
                <section className="mt-16">
                    <h2 className="text-3xl text-white font-bold mb-8">
                        Account Settings
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
                            <h3 className="text-white text-xl font-bold">
                                🔒 Change Password
                            </h3>
                            <p className="text-white/70 mt-4">
                                Keep your account secure by updating your password regularly.
                            </p>
                            <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-xl">
                                Update Password
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
                            <h3 className="text-white text-xl font-bold">
                                🚪 Logout
                            </h3>
                            <p className="text-white/70 mt-4">
                                Sign out from your hospital account securely.
                            </p>
                            <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-xl">
                                Logout
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================= Health Summary ================= */}
                <section className="mt-16 mb-10">
                    <h2 className="text-3xl text-white font-bold mb-8">
                        Health Summary
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white/10 rounded-3xl p-8 text-center">
                            <h2 className="text-5xl font-bold text-white">12</h2>
                            <p className="text-white/70 mt-4">Appointments</p>
                        </div>
                        <div className="bg-white/10 rounded-3xl p-8 text-center">
                            <h2 className="text-5xl font-bold text-white">5</h2>
                            <p className="text-white/70 mt-4">Reports</p>
                        </div>
                        <div className="bg-white/10 rounded-3xl p-8 text-center">
                            <h2 className="text-5xl font-bold text-white">3</h2>
                            <p className="text-white/70 mt-4">Doctors</p>
                        </div>
                        <div className="bg-white/10 rounded-3xl p-8 text-center">
                            <h2 className="text-5xl font-bold text-white">98%</h2>
                            <p className="text-white/70 mt-4">Health Score</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;