import { MessageCircle } from "lucide-react";
import { useState } from "react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || !email || !phone) {
      alert("Please fill all required fields");
      return;
    }

    const whatsappMessage = `New Inquiry:
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

    // Hide after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Schedule a Private Consultation
          </h2>

          <p className="text-gray-400">
            Connect with our experts to explore exclusive listings, investment
            opportunities, and personalized property recommendations.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-8 rounded-2xl space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          ></textarea>

          {/* Submit Button */}
          <button className="flex items-center justify-center gap-2 w-full bg-yellow-500 py-3 font-medium">
            <MessageCircle size={18} />
            Continue to WhatsApp
          </button>

          {/* Privacy Text */}
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Your information will not be shared.
          </p>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-600 text-sm text-center">
              Inquiry sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Inquiry;
