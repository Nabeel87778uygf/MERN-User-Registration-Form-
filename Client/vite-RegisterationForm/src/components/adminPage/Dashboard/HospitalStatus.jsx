const status = [

    {
        title: "Available Beds",
        value: 84
    },

    {
        title: "Occupied Beds",
        value: 116
    },

    {
        title: "ICU Beds",
        value: 18
    },

    {
        title: "Emergency Cases",
        value: 15
    }

]

const HospitalStatus = () => {

    return (

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 p-6 text-slate-800 dark:text-white">

            <h2 className="text-xl font-bold mb-6">

                Hospital Status

            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                {
                    status.map((item, index) => (

                        <div
                            key={index}
                            className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6"
                        >

                            <p className="text-slate-500 dark:text-slate-400">

                                {item.title}

                            </p>

                            <h1 className="text-4xl font-bold mt-3 text-blue-600 dark:text-blue-500">

                                {item.value}

                            </h1>

                        </div>

                    ))
                }

            </div>

        </div>

    )

}

export default HospitalStatus