import React from "react";
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer.jsx"
const About = () => {
  
  return (
    <>
      <main>
        <Navbar/>
      <div className="py-5 px-[10%] bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-3 font-playfair font-bold">
            About Elpise Inn Hostel
          </h2>
          <div className="h-[3px] w-20 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-18">
          <div>
            <p className="mb-7 text-lg leading-relaxed text-gray-700">
              Nestled on the pristine shores of the Philippines, Elpise Inn
              Hostel offers a perfect blend of comfort, luxury, and authentic
              Filipino hospitality. Our resort features spectacular ocean views,
              direct beach access, and a variety of accommodations to suit every
              traveler.
            </p>
            <p className="mb-7 text-lg leading-relaxed text-gray-700">
              Whether you're seeking a romantic getaway, family vacation, or
              solo adventure, our dedicated staff ensures your stay is
              memorable. We take pride in maintaining eco-friendly practices
              while providing world-class amenities and services.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
      </main>
    </>
  );
};

export default About;
