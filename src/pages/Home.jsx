import Hero from "../component/home/Hero";
import Featured from "../component/home/Featured";
import Navbar from "../component/layout/Navbar";
import Testimonials from "../component/home/Testimonials";
import Inquiry from "../component/home/Inquiry";
import Map from "../component/home/Map";
import Footer from "../component/layout/Footer";
import Trust from "../component/home/Trust";


const Home = () => {
  return (
    <div>
      <Navbar variant="transparent"/>
      <Hero />
      <Trust/>
      <Featured />
      <Testimonials/>
      <Inquiry/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default Home;