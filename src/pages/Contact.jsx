import { useState } from "react";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || !email || !phone) {
      alert("Please fill all required fields");
      return;
    }

    const whatsappMessage = `New Contact Inquiry:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const url = `https://wa.me/919987826481?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar variant="solid" />

      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div className="mb-20 max-w-xl">
            <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
              CONTACT US
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Get in Touch with LUXE CURATOR
            </h1>

            <p className="text-gray-500">
              Looking to buy, sell, or invest? Reach out for expert guidance.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* LEFT INFO */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-500 text-sm">
                    contact@luxecurator.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-500 text-sm">Mumbai, India</p>
                </div>
              </div>

              {/* Trust */}
              <div className="mt-10 space-y-2 text-sm text-gray-500">
                <p>✔ Quick response within 24 hours</p>
                <p>✔ 100% confidential consultation</p>
                <p>✔ Trusted by buyers & investors</p>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-md space-y-6"
            >
              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-2 rounded-lg">
                <Clock size={16} />
                <p>Get response within 15 minutes on WhatsApp</p>
              </div>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
              ></textarea>

              <button className="w-full bg-yellow-500 text-black py-3 font-medium hover:bg-yellow-400 transition">
                Continue to WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center">
                You’ll be redirected to WhatsApp to complete your message.
              </p>

              {submitted && (
                <p className="text-green-600 text-sm text-center">
                  Redirecting to WhatsApp...
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
