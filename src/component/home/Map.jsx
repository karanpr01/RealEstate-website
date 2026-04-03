const Map = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
            LOCATION
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Explore Our Prime Locations
          </h2>

          <p className="text-gray-500">
            Discover properties in the most sought-after neighborhoods.
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-100 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Map;