import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    text: "Exceptional service. Found my dream home within days. Highly professional and responsive.",
  },
  {
    name: "Priya Mehta",
    text: "A seamless experience from start to finish. Truly understands luxury real estate.",
  },
  {
    name: "Rahul Kapoor",
    text: "Top-notch expertise and attention to detail. Highly recommended for premium properties.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-20">
      {/* Heading */}
      <div className="mb-16 max-w-xl">
        <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4">
          CLIENT TESTIMONIALS
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-500">
          Trusted by buyers and investors seeking premium real estate
          experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 mb-6">“{item.text}”</p>

            {/* Name */}
            <h4 className="font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
