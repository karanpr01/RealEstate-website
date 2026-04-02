const PropertyCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img
        src="https://via.placeholder.com/400"
        alt="property"
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">$2,450,000</h3>
        <p className="text-gray-500 text-sm">
          4 Bed • 4 Bath • Luxury Villa
        </p>

        <button className="mt-4 text-sm font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;