import { motion } from "framer-motion";

const doctor1 = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80";
const doctor2 = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80";
const doctor3 = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80";

const doctors = [
    {
        image: doctor1,
        name: "Dr. Ahmed Khan",
        specialist: "Cardiologist"
    },
    {
        image: doctor2,
        name: "Dr. Sarah Ali",
        specialist: "Neurologist"
    },
    {
        image: doctor3,
        name: "Dr. Umar Shah",
        specialist: "Orthopedic"
    }
]

const Doctors = () => {

    return (

        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[5px] text-pink-200">

                        Doctors

                    </p>

                    <h2 className="text-5xl font-bold text-white mt-4">

                        Meet Our Specialists

                    </h2>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {

                        doctors.map((doctor, index) => (

                            <motion.div

                                key={index}

                                whileHover={{ y: -10 }}

                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden"

                            >

                                <img

                                    src={doctor.image}

                                    className="h-96 w-full object-cover"

                                />

                                <div className="p-6">

                                    <h3 className="text-white text-2xl font-bold">

                                        {doctor.name}

                                    </h3>

                                    <p className="text-pink-200 mt-2">

                                        {doctor.specialist}

                                    </p>

                                    <button className="mt-6 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold">

                                        View Profile

                                    </button>

                                </div>

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Doctors