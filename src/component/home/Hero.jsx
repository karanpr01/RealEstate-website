import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="luxury"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-yellow-400 mb-6">
            PREMIER REAL ESTATE
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-6">
            Find Your Dream Home in The Heights
          </h1>

          <p className="text-gray-300 text-lg mb-10">
            Access an exclusive collection of high-end properties and
            architectural masterpieces curated for discerning buyers.
          </p>

          <div className="flex gap-4 mt-6 ">
            <Link
              to="/properties"
              className="bg-yellow-500 text-black px-6 py-3 font-medium"
            >
              Explore Properties
            </Link>

            <a
              href="https://wa.me/919987826481"
              target="_blank"
              className="border border-white px-6 py-3"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
