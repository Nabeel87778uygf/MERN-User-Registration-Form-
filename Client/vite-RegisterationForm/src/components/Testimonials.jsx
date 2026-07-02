const testimonials = [
    {
        name: "Ali Khan",
        review: "Amazing doctors and excellent healthcare service. Highly recommended."
    },
    {
        name: "Sara Ahmed",
        review: "Very professional staff and easy online appointment booking."
    },
    {
        name: "Usman",
        review: "Best hospital experience. Clean environment and caring doctors."
    }
]

const Testimonials = () => {

    return (

        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[5px] text-pink-200">

                        Testimonials

                    </p>

                    <h2 className="text-5xl font-bold text-white mt-4">

                        What Patients Say

                    </h2>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {

                        testimonials.map((item, index) => (

                            <div

                                key={index}

                                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8"

                            >

                                <div className="text-yellow-300 text-2xl">

                                    ★★★★★

                                </div>

                                <p className="text-white/80 mt-6">

                                    "{item.review}"

                                </p>

                                <h3 className="text-white font-bold mt-8">

                                    {item.name}

                                </h3>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Testimonials