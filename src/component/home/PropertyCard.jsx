const PropertyCard = () => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="property"
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 text-sm">
          $2,450,000
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-lg font-semibold mb-2">
          Modern Luxury Villa
        </h3>

        <p className="text-gray-500 text-sm mb-4">
          4 Bed • 4 Bath • 3,500 sqft
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            Beverly Hills, CA
          </span>

          <button className="text-sm font-medium group-hover:underline">
            View Details →
          </button>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;