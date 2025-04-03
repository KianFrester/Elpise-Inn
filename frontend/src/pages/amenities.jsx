import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const Amenities = () => {
  const amenitiesData = [
    {
      emoji: "🏊",
      title: "Swimming Pool",
      description: "Relax and unwind in our beautifully designed outdoor swimming pool, surrounded by lush tropical gardens. Enjoy a refreshing dip or lounge by the poolside with a drink in hand.",
      features: [
        "Saltwater pool for a natural swimming experience",
        "Shaded cabanas and sun loungers",
        "Poolside bar serving cocktails and snacks",
        "Open from 8 AM to 8 PM",
      ],
    },
    {
      emoji: "🍽️",
      title: "Restaurant",
      description: "Savor delicious meals at our on-site restaurant, offering a variety of local and international cuisines made from fresh, locally sourced ingredients.",
      features: [
        "Indoor and outdoor seating available",
        "Daily breakfast buffet with local specialties",
        "Special themed dinner nights",
        "Room service available for in-room dining",
      ],
    },
    {
      emoji: "🏄",
      title: "Water Sports",
      description: "Experience the thrill of adventure with our range of water sports activities, perfect for both beginners and experienced enthusiasts.",
      features: [
        "Kayaking, snorkeling, and paddleboarding",
        "Guided island-hopping tours",
        "Equipment rental and safety gear provided",
        "Instructional classes available",
      ],
    },
    {
      emoji: "🌴",
      title: "Garden",
      description: "Stroll through our beautifully landscaped gardens, featuring native plants and flowers. A perfect spot for relaxation and taking in the natural beauty of the surroundings.",
      features: [
        "Walking paths and seating areas",
        "Yoga and meditation spots",
        "Birdwatching opportunities",
        "Seasonal flower displays",
      ],
    },
    {
      emoji: "🧖",
      title: "Spa Services",
      description: "Indulge in luxurious spa treatments designed to rejuvenate your body and mind. Enjoy a range of services from massages to facials, all performed by trained professionals.",
      features: [
        "Variety of treatments including aromatherapy and deep tissue massage",
        "Private treatment rooms with soothing ambiance",
        "Spa packages available for couples",
        "Booking in advance recommended",
      ],
    },
    {
      emoji: "🚌",
      title: "Tours",
      description: "Explore the beauty of Palawan with our guided tours. Discover hidden gems, pristine beaches, and the rich culture of the region with our knowledgeable guides.",
      features: [
        "Half-day and full-day tour options available",
        "Customizable itineraries based on guest preferences",
        "Transportation provided to and from the hotel",
        "Snorkeling gear included for marine tours",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-5 px-[10%] bg-white">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-3 font-playfair font-bold">
            Resort Amenities
          </h2>
          <div className="h-[3px] w-20 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="transition-transform duration-300 hover:-translate-y-1 bg-gray-50 p-5 rounded-lg shadow-md">
              <div className="text-5xl mb-3">{amenity.emoji}</div>
              <h4 className="text-lg font-semibold text-gray-800 font-montserrat mb-2">{amenity.title}</h4>
              <p className="text-gray-600 mb-4">{amenity.description}</p>
              <h5 className="font-medium text-gray-700">Features:</h5>
              <ul className="list-disc list-inside text-left text-gray-600">
                {amenity.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Amenities;
