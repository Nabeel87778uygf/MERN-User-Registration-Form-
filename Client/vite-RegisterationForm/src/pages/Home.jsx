import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Statistics from "../components/Statistics";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-600">
            <Hero />
            <Features />
            <Services />
            <Doctors />
            <Statistics />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
