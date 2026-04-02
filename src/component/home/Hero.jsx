const Hero = () => {
  return (
    <section className="relative h-screen w-full text-white">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="luxury house"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <div className="max-w-xl">

          <p className="text-sm tracking-widest text-yellow-400 mb-4">
            PREMIER REAL ESTATE
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Find Your Dream Home in The Heights
          </h1>

          <p className="text-gray-300 mb-8">
            Access an exclusive collection of high-end properties and
            architectural masterpieces curated for discerning buyers.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 font-medium">
              View Portfolio
            </button>

            <button className="border border-white px-6 py-3">
              WhatsApp
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;