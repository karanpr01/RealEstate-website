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

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Find Verified Premium Properties in Mumbai Without Wasting Time
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            LUXE CURATOR helps buyers and investors discover high-value
            properties with expert guidance and verified listings.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to="/properties"
              className="bg-yellow-500 text-black px-6 py-3 font-medium"
            >
              Explore Properties
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="border border-white px-6 py-3"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
