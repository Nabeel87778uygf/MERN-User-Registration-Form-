import { motion } from "framer-motion";

const StatsCard = ({
    title,
    value,
    icon,
    color,
    increase,
}) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
        >
            <div className="flex justify-between items-center">

                <div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2 text-slate-800 dark:text-white">
                        {value}
                    </h2>

                    <p className="mt-4 text-green-600 font-semibold">
                        ↑ {increase}
                    </p>

                </div>

                <div
                    className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl`}
                >
                    {icon}
                </div>

            </div>
        </motion.div>
    );
};

export default StatsCard;