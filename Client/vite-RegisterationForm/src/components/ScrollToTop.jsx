import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggle = () => {

            if (window.scrollY > 300) {

                setVisible(true);

            } else {

                setVisible(false);

            }

        };

        window.addEventListener("scroll", toggle);

        return () => window.removeEventListener("scroll", toggle);

    }, []);

    return (

        visible && (

            <button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-xl z-50"
            >

                <FaArrowUp />

            </button>

        )

    );
};

export default ScrollToTop;