import PropertyCard from "./PropertyCard";

const Featured = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      <div className="mb-16 max-w-xl">
        <p className="text-xs tracking-[0.3em] font-bold text-yellow-500 mb-4">
          OUR COLLECTION
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Featured Properties
        </h2>

        <p className="text-gray-500">
          Explore a curated selection of premium properties designed for modern
          luxury living.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
};

export default Featured;
