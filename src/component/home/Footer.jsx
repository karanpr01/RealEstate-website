const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            LUXE CURATOR
          </h2>

          <p className="text-gray-400 text-sm">
            Delivering premium real estate experiences with unmatched expertise and personalized service.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-medium">Quick Links</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Properties</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-medium">Contact</h3>

          <p className="text-gray-400 text-sm">
            Mumbai, India
          </p>

          <p className="text-gray-400 text-sm mt-2">
            +91 9876543210
          </p>

          <p className="text-gray-400 text-sm mt-2">
            contact@luxecurator.com
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Luxe Curator. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;