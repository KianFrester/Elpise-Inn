import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <div
          className="h-[85vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4 relative"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(src/assets/homepage.png)',
          }}
        >
          <div className="max-w-3xl z-10 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-shadow font-playfair">
              Experience Paradise in the Philippines
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-shadow font-light tracking-wide max-w-2xl mx-auto">
              Enjoy stunning beachfront views, cozy accommodations, and
              exceptional hospitality
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <button className="px-8 py-4 text-lg bg-teal-600 text-white rounded font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-lg">
                  Book Your Stay
                </button>
              </Link>
              <Link to="/rooms">
                <button className="px-8 py-4 text-lg bg-blue-600 text-white rounded font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg">
                  Rooms
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 text-lg bg-green-600 text-white rounded font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
