import PropertyCard from "./PropertyCard";

const Featured = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-semibold mb-10">
        Featured Collections
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
};

export default Featured;