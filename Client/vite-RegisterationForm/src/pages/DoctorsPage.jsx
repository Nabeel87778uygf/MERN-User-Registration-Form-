import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaSearch,
    FaHeartbeat,
    FaBrain,
    FaBone,
    FaEye,
    FaTooth,
    FaStar,
    FaRegHeart,
    FaHeart,
    FaCalendarCheck,
    FaTimes,
    FaClock,
    FaEnvelope,
    FaPhone,
    FaChild,
    FaUserMd,
} from "react-icons/fa";

// ========== Departments (derived from specializations) ==========
// We'll build the filter list dynamically from the doctors data
// but we keep a static list for the filter buttons.
const departments = [
    "All",
    "Cardiologist",
    "Neurologist",
    "Orthopedic",
    "Pediatrician",
    "Dentist",
    "Dermatologist",
];

// ========== Updated Doctors Data (professional) ==========
const doctors = [
    {
        id: 1,
        name: "Dr. Ahmed Khan",
        specialization: "Cardiologist",
        experience: "12 Years",
        rating: 4.9,
        patients: "2.5k+",
        status: "Available",
        image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Dr. Sarah Ali",
        specialization: "Neurologist",
        experience: "10 Years",
        rating: 4.8,
        patients: "1.8k+",
        status: "Available",
        image:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Dr. Umar Shah",
        specialization: "Orthopedic",
        experience: "15 Years",
        rating: 5.0,
        patients: "3.2k+",
        status: "Busy",
        image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: 4,
        name: "Dr. Fatima Noor",
        specialization: "Pediatrician",
        experience: "9 Years",
        rating: 4.7,
        patients: "1.6k+",
        status: "Available",
        image:
            "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: 5,
        name: "Dr. Bilal Ahmed",
        specialization: "Dentist",
        experience: "11 Years",
        rating: 4.9,
        patients: "2.1k+",
        status: "Available",
        image:
            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: 6,
        name: "Dr. Ayesha Malik",
        specialization: "Dermatologist",
        experience: "8 Years",
        rating: 4.8,
        patients: "1.9k+",
        status: "Available",
        image:
            "https://images.unsplash.com/photo-1651008376811-b90baee60c1?w=600&auto=format&fit=crop&q=80",
    },
];

// ========== Icon mapping for overview ==========
const specializationIcons = {
    Cardiologist: <FaHeartbeat className="text-5xl text-pink-300 mx-auto" />,
    Neurologist: <FaBrain className="text-5xl text-pink-300 mx-auto" />,
    Orthopedic: <FaBone className="text-5xl text-pink-300 mx-auto" />,
    Pediatrician: <FaChild className="text-5xl text-pink-300 mx-auto" />,
    Dentist: <FaTooth className="text-5xl text-pink-300 mx-auto" />,
    Dermatologist: <FaUserMd className="text-5xl text-pink-300 mx-auto" />,
};

const DoctorsPage = () => {
    const [search, setSearch] = useState("");
    const [activeDepartment, setActiveDepartment] = useState("All");

    // States for modals & favorites
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showAppointment, setShowAppointment] = useState(false);
    const [favorites, setFavorites] = useState([]);

    // Filtering logic (now using specialization)
    const filteredDoctors = doctors.filter((doctor) => {
        const matchesDepartment =
            activeDepartment === "All" ||
            doctor.specialization === activeDepartment;
        const matchesSearch = doctor.name
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesDepartment && matchesSearch;
    });

    // Toggle favorite
    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((item) => item !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    // Get unique specializations for the overview section
    const uniqueSpecializations = [...new Set(doctors.map(d => d.specialization))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600">
            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase tracking-[6px] text-pink-200 font-semibold">
                            Our Doctors
                        </span>
                        <h1 className="text-6xl font-bold text-white mt-6">
                            Meet Our
                            <span className="block text-pink-300">
                                Medical Specialists
                            </span>
                        </h1>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto mt-8 leading-9">
                            Find experienced doctors from different departments and book
                            appointments online with just one click.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search */}
            <section className="pb-10 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 flex items-center gap-4">
                        <FaSearch className="text-white text-2xl" />
                        <input
                            type="text"
                            placeholder="Search Doctor..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent outline-none text-white placeholder:text-white/60 flex-1 text-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Department Filter (now using specializations) */}
            <section className="pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-5">
                        {departments.map((dept, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveDepartment(dept)}
                                className={`px-7 py-3 rounded-full font-semibold duration-300 ${activeDepartment === dept
                                        ? "bg-white text-purple-700"
                                        : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-purple-700"
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Overview (dynamically generated from specializations) */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {uniqueSpecializations.map((spec) => (
                            <motion.div
                                key={spec}
                                whileHover={{ y: -8 }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center"
                            >
                                {specializationIcons[spec] || <FaUserMd className="text-5xl text-pink-300 mx-auto" />}
                                <h3 className="text-white text-xl font-bold mt-5">
                                    {spec}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctor Cards */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredDoctors.map((doctor) => (
                            <motion.div
                                key={doctor.id}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <div className="relative">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-80 object-cover"
                                    />
                                    {/* Favorite Button */}
                                    <button
                                        onClick={() => toggleFavorite(doctor.id)}
                                        className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg"
                                    >
                                        {favorites.includes(doctor.id) ? (
                                            <FaHeart className="text-red-500" />
                                        ) : (
                                            <FaRegHeart className="text-pink-500" />
                                        )}
                                    </button>
                                    <span
                                        className={`absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${doctor.status === "Available"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                            } text-white`}
                                    >
                                        {doctor.status}
                                    </span>
                                </div>

                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-white">
                                        {doctor.name}
                                    </h2>
                                    <p className="text-pink-300 mt-2">
                                        {doctor.specialization}
                                    </p>

                                    <div className="flex justify-between mt-6">
                                        <div>
                                            <p className="text-white/70 text-sm">
                                                Experience
                                            </p>
                                            <h4 className="text-white font-semibold">
                                                {doctor.experience}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaStar className="text-yellow-400" />
                                            <span className="text-white">
                                                {doctor.rating}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Patients count (new field) */}
                                    <div className="mt-2 flex items-center gap-2 text-white/80">
                                        <span className="text-sm">👥 Patients:</span>
                                        <span className="font-semibold text-white">
                                            {doctor.patients}
                                        </span>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-3 mt-6">
                                        <button
                                            onClick={() => {
                                                setSelectedDoctor(doctor);
                                                setShowModal(true);
                                            }}
                                            className="flex-1 bg-white text-purple-700 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white duration-300"
                                        >
                                            View Profile
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelectedDoctor(doctor);
                                                setShowAppointment(true);
                                            }}
                                            className="flex-1 bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600"
                                        >
                                            Book
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== Doctor Details Modal ====== */}
            {showModal && selectedDoctor && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-3xl font-bold">Doctor Profile</h2>
                            <button onClick={() => setShowModal(false)}>
                                <FaTimes className="text-2xl" />
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 p-8">
                            <img
                                src={selectedDoctor.image}
                                alt={selectedDoctor.name}
                                className="rounded-2xl h-96 object-cover w-full"
                            />
                            <div>
                                <h2 className="text-3xl font-bold">
                                    {selectedDoctor.name}
                                </h2>
                                <p className="text-pink-600 mt-2">
                                    {selectedDoctor.specialization}
                                </p>
                                <div className="mt-6 space-y-4">
                                    <p>
                                        ⭐ Rating : <b>{selectedDoctor.rating}</b>
                                    </p>
                                    <p>
                                        💼 Experience : <b>{selectedDoctor.experience}</b>
                                    </p>
                                    <p>
                                        👥 Patients : <b>{selectedDoctor.patients}</b>
                                    </p>
                                    <p>
                                        📞 Phone : <b>+92 300 1234567</b>
                                    </p>
                                    <p>
                                        ✉ Email : <b>doctor@hospital.com</b>
                                    </p>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Quaerat molestiae exercitationem voluptatem
                                        voluptate vitae.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ====== Appointment Modal ====== */}
            {showAppointment && selectedDoctor && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-3xl w-full max-w-xl">
                        <div className="flex justify-between items-center border-b p-6">
                            <h2 className="text-2xl font-bold">Book Appointment</h2>
                            <button onClick={() => setShowAppointment(false)}>
                                <FaTimes className="text-2xl" />
                            </button>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                            <p className="text-pink-600">{selectedDoctor.specialization}</p>
                            <input
                                type="text"
                                placeholder="Patient Name"
                                className="w-full border mt-6 p-4 rounded-xl outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border mt-4 p-4 rounded-xl outline-none"
                            />
                            <input
                                type="date"
                                className="w-full border mt-4 p-4 rounded-xl outline-none"
                            />
                            <button className="mt-8 w-full bg-gradient-to-r from-pink-500 to-purple-700 text-white py-4 rounded-xl font-bold">
                                Confirm Appointment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorsPage;