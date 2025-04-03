import React, { useState } from "react";
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer.jsx"

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  const openDetails = (room) => {
    setSelectedRoom(room);
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeDetails = () => {
    setSelectedRoom(null);
    document.body.style.overflow = 'auto'; 
  };

  const rooms = [
    {
      id: 1,
      name: "Transient Rooms",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000",
      description: "Comfortable and affordable rooms with modern amenities, perfect for solo travelers and couples.",
      longDescription: "Our Transient Rooms offer the perfect blend of comfort and value. These well-appointed accommodations feature everything you need for a restful stay, whether you're traveling for business or pleasure. Each room is thoughtfully designed to provide a cozy atmosphere while maintaining a modern aesthetic.",
      features: [
        "Air conditioning",
        "Private bathroom",
        "Free WiFi",
        "From ₱1,500/night"
      ],
      capacity: "1-2 Guests",
      size: "24 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "Queen-size bed",
        "Desk and chair",
        "Mini refrigerator",
        "Cable/Satellite TV",
        "Hot and cold shower",
        "Complimentary toiletries",
        "Daily housekeeping",
        "In-room safe",
        "Tea/coffee making facilities"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "No smoking",
        "No pets allowed",
        "Extra bed available upon request (additional fee)",
      ],
      bedConfig: "1 Queen or 2 Single Beds",
      view: "Garden or Courtyard View",
    },
    {
      id: 2,
      name: "Beachfront Cottages",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
      description: "Private cottages with stunning ocean views, offering an authentic island experience.",
      longDescription: "Wake up to the sound of gentle waves and breathtaking ocean views in our Beachfront Cottages. These private accommodations offer direct access to the pristine shores of our beach, allowing you to experience the true beauty of island living. Each cottage provides a perfect balance of rustic charm and modern comfort.",
      features: [
        "Direct beach access",
        "Private veranda",
        "Breakfast included",
        "From ₱2,800/night"
      ],
      capacity: "2-3 Guests",
      size: "32 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "King-size bed",
        "Hammock",
        "Outdoor seating area",
        "Mini bar",
        "Air conditioning",
        "Ceiling fan",
        "Walk-in shower",
        "Beach towels",
        "Room service",
        "Daily turndown service",
        "Bluetooth speaker"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "No smoking inside the cottage",
        "Children welcome",
        "No pets allowed",
      ],
      bedConfig: "1 King Bed + Optional Daybed",
      view: "Direct Ocean View",
    },
    {
      id: 3,
      name: "Family Suites",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000",
      description: "Spacious accommodations ideal for families and groups wanting a comfortable stay.",
      longDescription: "Our Family Suites provide the perfect home-away-from-home experience for your loved ones. These generous accommodations feature separate sleeping and living areas, giving everyone the space they need while still enjoying quality time together. Thoughtfully designed with families in mind, these suites offer both comfort and functionality.",
      features: [
        "Multiple bedrooms",
        "Kitchenette",
        "Living area",
        "From ₱3,500/night"
      ],
      capacity: "4-5 Guests",
      size: "55 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "Master bedroom with king-size bed",
        "Second bedroom with twin beds",
        "Sofa bed in living room",
        "Full kitchenette with microwave and refrigerator",
        "Dining table for 6",
        "Two bathrooms",
        "Smart TV with streaming services",
        "Board games",
        "Children's amenities available on request",
        "Laundry service",
        "Welcome fruit basket"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "Children of all ages welcome",
        "No smoking",
        "No pets allowed",
        "Maximum occupancy: 6 guests",
      ],
      bedConfig: "1 King Bed, 2 Twin Beds, 1 Sofa Bed",
      view: "Garden or Pool View",
    },
    {
      id: 4,
      name: "Deluxe Ocean View",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      description: "Elegant rooms with breathtaking ocean views and premium amenities for a luxurious experience.",
      longDescription: "Indulge in luxury with our Deluxe Ocean View rooms. Floor-to-ceiling windows showcase panoramic views of the Philippine Sea, creating a breathtaking backdrop for your stay. These sophisticated accommodations blend contemporary design with tasteful island-inspired elements for an unforgettable experience.",
      features: [
        "Panoramic ocean view",
        "King-size bed",
        "Mini bar",
        "From ₱4,200/night"
      ],
      capacity: "2 Guests",
      size: "38 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "Premium king-size bed with luxury linens",
        "Floor-to-ceiling windows",
        "Private balcony with seating",
        "Espresso machine",
        "Premium minibar with local selections",
        "Spa-inspired bathroom with rain shower",
        "Luxury bath amenities",
        "Plush bathrobes and slippers",
        "Evening turndown service",
        "Digital concierge service",
        "Complimentary welcome drink"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "No smoking",
        "Maximum occupancy: 2 adults",
        "Extra bed not available",
      ],
      bedConfig: "1 King Bed",
      view: "Panoramic Ocean View",
    },
    {
      id: 5,
      name: "Barkada Room",
      image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&q=80&w=1000",
      description: "Designed for friend groups with multiple beds and a social space perfect for bonding.",
      longDescription: "The perfect accommodation for friend groups looking to create lasting memories together. Our Barkada Rooms feature multiple sleeping arrangements and a central social area where you can hang out, play games, or plan your next adventure. Designed with group dynamics in mind, these rooms provide both community space and personal privacy.",
      features: [
        "Multiple beds",
        "Game console",
        "Mini fridge",
        "From ₱5,000/night"
      ],
      capacity: "4-8 Guests",
      size: "65 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "4 queen-size beds or 8 single beds (flexible configuration)",
        "Central lounge area with comfortable seating",
        "55-inch Smart TV",
        "Gaming console with selection of games",
        "Bluetooth sound system",
        "Kitchenette with microwave and refrigerator",
        "Two bathrooms",
        "Balcony or terrace",
        "Selection of board games and cards",
        "High-speed WiFi for multiple devices",
        "Group dining table"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "Noise curfew after 10:00 PM in respect of other guests",
        "No smoking",
        "Maximum occupancy: 8 guests",
        "Damage deposit required",
      ],
      bedConfig: "Flexible: 4 Queen Beds or 8 Single Beds",
      view: "Garden or Pool View",
    },
    {
      id: 6,
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
      description: "Our premium suite offering the ultimate luxury experience with separate living areas and exclusive amenities.",
      longDescription: "Experience the pinnacle of luxury with our Executive Suite. This expansive accommodation offers separate living, dining and sleeping areas for the ultimate in comfort and sophistication. Impeccable design, premium furnishings, and personalized service come together to create a truly exceptional stay experience for discerning travelers.",
      features: [
        "Separate living room",
        "Jacuzzi tub",
        "Complimentary spa access",
        "From ₱6,500/night"
      ],
      capacity: "2-3 Guests",
      size: "78 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1609949279531-cf48d64a889a?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "Master bedroom with premium king-size bed",
        "Separate living room with designer furniture",
        "Dining area for 4",
        "Private balcony with premium outdoor furniture",
        "Deep soaking jacuzzi tub",
        "Walk-in rain shower",
        "Double vanity bathroom",
        "Full minibar with premium selections",
        "Espresso machine and tea service",
        "Daily fresh fruit and flowers",
        "Pillow menu",
        "Twice-daily housekeeping",
        "Personal concierge service",
        "Complimentary airport transfers",
        "Access to Executive Lounge"
      ],
      policies: [
        "Check-in: 2:00 PM (early check-in when available)",
        "Check-out: 12:00 PM (late check-out available)",
        "No smoking",
        "Children over 12 welcome",
        "Personalized welcome amenity",
      ],
      bedConfig: "1 King Bed + Optional Rollaway",
      view: "Premium Ocean or Mountain View",
    },
    {
      id: 7,
      name: "Garden Villa",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      description: "Secluded villas surrounded by lush tropical gardens offering privacy and tranquility.",
      longDescription: "Nestled within our lush tropical gardens, these private villas offer a secluded retreat while still being just steps away from the beach and resort amenities. Surrounded by fragrant flowers and swaying palms, each Garden Villa provides a peaceful sanctuary where you can reconnect with nature and find true relaxation.",
      features: [
        "Private garden",
        "Outdoor shower",
        "Hammock",
        "From ₱4,800/night"
      ],
      capacity: "2-4 Guests",
      size: "45 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "King-size four-poster bed",
        "Private walled garden",
        "Outdoor shower and bathtub",
        "Indoor bathroom with rain shower",
        "Sun loungers and hammock",
        "Ceiling fans and air conditioning",
        "Mini refrigerator stocked with refreshments",
        "Private entrance",
        "Natural bath amenities",
        "Daily fresh coconut delivery",
        "Outdoor dining area",
        "Yoga mats",
        "Insect repellent and after-sun care"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "No smoking inside the villa",
        "Children welcome",
        "Pets not allowed",
      ],
      bedConfig: "1 King Bed + Optional Daybeds",
      view: "Private Garden View",
    },
    {
      id: 8,
      name: "Honeymoon Suite",
      image: "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?auto=format&fit=crop&q=80&w=1000",
      description: "Romantic suite specially designed for couples with intimate settings and romantic touches.",
      longDescription: "Celebrate your love in our specially designed Honeymoon Suite. This romantic haven features thoughtful touches to create an intimate atmosphere for couples. From the luxurious king-size bed and private balcony to special amenities and services, every detail has been carefully considered to enhance your romantic getaway.",
      features: [
        "Four-poster bed",
        "Private balcony",
        "Champagne service",
        "From ₱5,500/night"
      ],
      capacity: "2 Guests",
      size: "42 sqm",
      additionalImages: [
        "https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1602002418082-dd4a8d5d2a64?auto=format&fit=crop&q=80&w=1000",
      ],
      amenities: [
        "Romantic four-poster king-size bed with premium linens",
        "Private balcony with sunset views",
        "Double bathtub for two",
        "Luxurious bathroom with couples' rain shower",
        "Complimentary bottle of champagne on arrival",
        "Fresh flower arrangements",
        "Chocolate-covered strawberries turndown service",
        "Scented candles and essential oils",
        "Bluetooth speaker system",
        "His and hers bathrobes and slippers",
        "Luxury bath products",
        "Romantic dinner setup available on request",
        "Couples massage service available"
      ],
      policies: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "Adults only (18+)",
        "No smoking",
        "Special honeymoon/anniversary decorations available on request",
      ],
      bedConfig: "1 King Four-Poster Bed",
      view: "Ocean and Sunset View",
    }
  ];

  return (
    <>
      <main>
        <Navbar/>
        <div className="py-5 px-4 md:px-[5%] lg:px-[10%] bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-3 font-playfair font-bold text-center">
              Our Rooms
            </h2>
            <div className="h-[3px] w-20 bg-teal-600 mx-auto mb-8"></div>
            
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              Discover our range of accommodations designed to provide comfort, luxury, and an authentic island experience for every type of traveler.
            </p>
            
            {/* Grid layout that shows 1 column on mobile, 2 on tablet, 3 on laptop, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {rooms.map((room) => (
                <div 
                  key={room.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
                >
                  <div
                    className="h-56 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${room.image}")`,
                    }}
                  >
                    <div className="flex justify-between p-3">
                      <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {room.capacity}
                      </span>
                      <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {room.size}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h4 className="text-xl mb-2 text-teal-600 font-playfair font-semibold">
                      {room.name}
                    </h4>
                    <p className="mb-4 text-gray-600 leading-relaxed text-sm">
                      {room.description}
                    </p>
                    <ul className="mb-6 flex-grow">
                      {room.features.map((feature, index) => (
                        <li key={index} className="mb-2 flex items-center text-gray-600 text-[0.95rem]">
                          <span className="text-teal-600 text-xl mr-3">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <button 
                        onClick={() => openDetails(room)}
                        className="w-full py-3 bg-teal-600 text-white rounded font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-teal-700"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <h3 className="text-2xl text-gray-800 mb-6 font-playfair">Looking for group accommodation?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                For special events, retreats, or large group bookings, please contact our reservations team directly for customized options and special rates.
              </p>
              <a 
                href="/booking" 
                className="px-8 py-4 text-lg bg-teal-600 text-white rounded font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-lg inline-block"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <Footer/>
        
        {/* Room Details Modal */}
        {selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal header with close button */}
              <div className="sticky top-0 bg-white p-5 border-b border-gray-200 flex justify-between items-center z-10">
                <h3 className="text-2xl font-playfair text-teal-600 font-bold">{selectedRoom.name}</h3>
                <button 
                  onClick={closeDetails}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              {/* Modal content */}
              <div className="p-5">
                {/* Image gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="md:col-span-2">
                    <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-60 object-cover rounded-lg" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 h-60">
                    {selectedRoom.additionalImages.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${selectedRoom.name} detail ${idx + 1}`} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Room info */}
                <div className="mb-8">
                  <h4 className="text-xl font-medium mb-4">About This Room</h4>
                  <p className="text-gray-600 mb-4">{selectedRoom.longDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-sm text-gray-500">Room Size</span>
                      <span className="font-medium">{selectedRoom.size}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-sm text-gray-500">Capacity</span>
                      <span className="font-medium">{selectedRoom.capacity}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-sm text-gray-500">Bed Configuration</span>
                      <span className="font-medium">{selectedRoom.bedConfig}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-sm text-gray-500">View</span>
                      <span className="font-medium">{selectedRoom.view}</span>
                    </div>
                  </div>
                </div>
                
                {/* Amenities */}
                <div className="mb-8">
                  <h4 className="text-xl font-medium mb-4">Room Amenities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                    {selectedRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center py-1.5">
                        <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Policies */}
                <div className="mb-8">
                  <h4 className="text-xl font-medium mb-4">Room Policies</h4>
                  <ul className="space-y-2">
                    {selectedRoom.policies.map((policy, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700">{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price and booking button */}
                <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <span className="block text-gray-500 text-sm">Price starts from</span>
                    <span className="text-2xl font-bold text-teal-600">
                      {selectedRoom.features[3].replace("From ", "")}
                    </span>
                  </div>
                  <a 
                    href="/booking" 
                    className="mt-4 md:mt-0 px-6 py-3 bg-teal-600 text-white rounded font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-teal-700 inline-block"
                  >
                    Book This Room
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Room;
