import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar variant="solid" />

      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* INTRO */}
          <div className="mb-20 max-w-xl">
            <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
              ABOUT US
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              LUXE CURATOR — Trusted Real Estate Experts in Mumbai
            </h1>

            <p className="text-gray-500">
              At LUXE CURATOR, we specialize in helping clients buy, sell, and invest in premium properties across Mumbai’s most desirable locations.
            </p>
          </div>

          {/* STORY */}
          <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

              <p className="text-gray-500 mb-4">
                At LUXE CURATOR, our mission is to simplify the real estate journey by providing transparent, reliable, and result-driven services.
              </p>

              <p className="text-gray-500">
                Whether you're a first-time buyer or a seasoned investor, we
                ensure you make confident and informed decisions.
              </p>
            </div>

            <div className="h-75 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Luxe Curator Real Estate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 text-center">
            <div>
              <h3 className="text-3xl font-semibold text-yellow-500">100+</h3>
              <p className="text-gray-500 text-sm">Properties Sold</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-yellow-500">50+</h3>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-yellow-500">10+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-yellow-500">20+</h3>
              <p className="text-gray-500 text-sm">Premium Locations</p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Why Clients Trust Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Transparent Process</h4>
                <p className="text-gray-500 text-sm">
                  Clear communication and honest guidance at every step.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Strong Market Knowledge</h4>
                <p className="text-gray-500 text-sm">
                  Deep insights into local trends and property values.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Client-Centric Approach</h4>
                <p className="text-gray-500 text-sm">
                  Every decision is made keeping your best interests in mind.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Let’s Find Your Perfect Property
            </h2>

            <p className="text-gray-400 mb-6">
              Get in touch with us today and start your real estate journey with
              confidence.
            </p>

            <button className="bg-yellow-500 text-black px-6 py-3 font-medium">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
