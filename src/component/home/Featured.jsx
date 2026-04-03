import PropertyCard from "./PropertyCard";

const Featured = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-10">
        Featured Collections
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
};

export default Featured;