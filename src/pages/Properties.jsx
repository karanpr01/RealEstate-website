import { useState } from "react";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

const propertiesData = [
  {
    id: 1,
    title: "Luxury Sea View Villa",
    type: "villa",
    price: "₹4.5 Cr",
    location: "Bandra, Mumbai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Modern Apartment",
    type: "apartment",
    price: "₹1.8 Cr",
    location: "Andheri, Mumbai",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    title: "Premium Penthouse",
    type: "penthouse",
    price: "₹6.2 Cr",
    location: "Worli, Mumbai",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
  },
  {
    id: 4,
    title: "Elegant Family Villa",
    type: "villa",
    price: "₹3.9 Cr",
    location: "Juhu, Mumbai",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
  {
    id: 5,
    title: "City View Apartment",
    type: "apartment",
    price: "₹2.2 Cr",
    location: "Powai, Mumbai",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 6,
    title: "Luxury Penthouse Suite",
    type: "penthouse",
    price: "₹7.5 Cr",
    location: "Lower Parel, Mumbai",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  },
];

const filters = ["all", "villa", "apartment", "penthouse"];

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProperties =
    activeFilter === "all"
      ? propertiesData
      : propertiesData.filter((item) => item.type === activeFilter);

  return (
    <>
      <Navbar variant="solid" />

      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="mb-12 max-w-xl">
            <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
              PROPERTIES
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Explore Premium Listings
            </h1>

            <p className="text-gray-500">
              Discover a curated selection of luxury properties in Mumbai’s most
              desirable locations.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm capitalize border transition ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Property Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Price */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 text-sm">
                    {property.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {property.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {property.location}
                  </p>

                  <button className="text-sm font-medium hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Properties;