import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <a
        href="https://wa.me/919987826481"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-200"
      >
        <FaWhatsapp className="text-white" size={24} />
      </a>
    </BrowserRouter>
  );
}

export default App;
