import Hero from "../component/home/Hero";
import Featured from "../component/home/Featured";
import Navbar from "../component/layout/Navbar";
import Testimonials from "../component/home/Testimonials";
import Inquiry from "../component/home/Inquiry";
import Map from "../component/home/Map";
import Footer from "../component/home/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Featured />
      <Testimonials/>
      <Inquiry/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default Home;