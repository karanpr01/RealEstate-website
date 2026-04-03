import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

const services = [
  {
    title: "Property Buying Assistance",
    desc: "We help you find and secure the perfect property that matches your lifestyle and investment goals.",
  },
  {
    title: "Property Selling Services",
    desc: "Maximize your property value with our expert marketing, pricing strategy, and buyer network.",
  },
  {
    title: "Real Estate Investment Advisory",
    desc: "Get expert guidance on high-return investment opportunities in prime locations.",
  },
  {
    title: "Property Management",
    desc: "End-to-end management solutions including tenant handling, maintenance, and rent collection.",
  },
  {
    title: "Legal & Documentation Support",
    desc: "Hassle-free assistance with property documentation, verification, and legal processes.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar variant="solid" />

      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* HERO */}
          <div className="mb-20 max-w-xl">
            <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
              OUR SERVICES
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Comprehensive Real Estate Solutions
            </h1>

            <p className="text-gray-500">
              From buying and selling to investment and management, we provide complete real estate services tailored to your needs.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* WHY CHOOSE US */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Local Market Expertise</h4>
                <p className="text-gray-500 text-sm">
                  Deep understanding of Mumbai’s real estate market and premium locations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Trusted Network</h4>
                <p className="text-gray-500 text-sm">
                  Access to exclusive listings and a strong network of buyers and sellers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">End-to-End Support</h4>
                <p className="text-gray-500 text-sm">
                  From property search to final deal, we handle everything for you.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Looking to Buy, Sell or Invest?
            </h2>

            <p className="text-gray-400 mb-6">
              Connect with our experts for personalized real estate solutions.
            </p>

            <button className="bg-yellow-500 text-black px-6 py-3 font-medium">
              Contact Us
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;