import Hero from "../component/home/Hero";
import Featured from "../component/home/Featured";
import Navbar from "../component/layout/Navbar";

const Home = () => {
  return (
    <div>
        <Navbar/>
      <Hero />
      <Featured />
    </div>
  );
};

export default Home;