import Hero from "../component/home/Hero";
import Featured from "../component/home/Featured";
import Navbar from "../component/layout/Navbar";
import Testimonials from "../component/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Featured />
      <Testimonials/>
    </div>
  );
};

export default Home;