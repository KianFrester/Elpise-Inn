import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import MainNavbar from "../components/main_navbar";
import Footer from "../components/footer";

const BookingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useKindeAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showRoomPreview, setShowRoomPreview] = useState(false);
  const [previewRoom, setPreviewRoom] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [addonQuantities, setAddonQuantities] = useState({});
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [isRoomAvailable, setIsRoomAvailable] = useState(true);
  
  // Form state
  const [booking, setBooking] = useState({
    roomId: "",
    roomName: "",
    roomPrice: 0,
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: 1,
    paymentMethod: "credit_card",
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    totalAmount: 0,
    addOnsAmount: 0,
    email: user?.email || "",
    specialRequests: ""
  });


  const addOns = [
    {
      id: 1,
      name: "Daily Breakfast Package",
      description: "Start your day with a delicious continental breakfast",
      price: 250,
      image: "https://images.unsplash.com/photo-1533089860892-a9b969ae0f50?q=80&w=300",
      perPerson: true
    },
    {
      id: 2,
      name: "Airport Transfer",
      description: "Convenient pick-up and drop-off service from the airport",
      price: 800,
      image: "https://images.unsplash.com/photo-1572789271953-cf9e8c48850f?q=80&w=300",
      perPerson: false
    },
    {
      id: 3,
      name: "Special Room Decoration",
      description: "Perfect for birthdays, honeymoons, or anniversaries",
      price: 1200,
      image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=300",
      perPerson: false
    },
    {
      id: 4,
      name: "Island Hopping Tour",
      description: "Full-day tour to nearby islands with lunch included",
      price: 1500,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=300",
      perPerson: true
    },
    {
      id: 5,
      name: "Spa Treatment Package",
      description: "Relaxing 60-minute massage and spa treatment",
      price: 1800,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300",
      perPerson: true
    },
    {
      id: 6,
      name: "Welcome Champagne & Fruits",
      description: "Bottle of champagne and fresh fruit basket upon arrival",
      price: 950,
      image: "https://images.unsplash.com/photo-1570863102771-eee358b9b8de?q=80&w=300",
      perPerson: false
    }
  ];

  // Complete room data from RoomsPage
  const allRooms = [
    {
      id: 1,
      name: "Transient Rooms",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000",
      description:
        "Comfortable and affordable rooms with modern amenities, perfect for solo travelers and couples.",
      longDescription:
        "Our Transient Rooms offer the perfect blend of comfort and value. These well-appointed accommodations feature everything you need for a restful stay, whether you're traveling for business or pleasure. Each room is thoughtfully designed to provide a cozy atmosphere while maintaining a modern aesthetic.",
      features: [
        "Air conditioning",
        "Private bathroom",
        "Free WiFi",
        "From ₱1,500/night",
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
        "Tea/coffee making facilities",
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
      price: 1500,
      maxGuests: 2,
      // Simulated unavailable dates
      unavailableDates: ["2025-04-10", "2025-04-11", "2025-04-15", "2025-04-20", "2025-04-21"]
    },
    // Additional rooms data...
    {
      id: 2,
      name: "Beachfront Cottages",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
      description:
        "Private cottages with stunning ocean views, offering an authentic island experience.",
      longDescription:
        "Wake up to the sound of gentle waves and breathtaking ocean views in our Beachfront Cottages. These private accommodations offer direct access to the pristine shores of our beach, allowing you to experience the true beauty of island living. Each cottage provides a perfect balance of rustic charm and modern comfort.",
      features: [
        "Direct beach access",
        "Private veranda",
        "Breakfast included",
        "From ₱2,800/night",
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
        "Bluetooth speaker",
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
      price: 2800,
      maxGuests: 3,
      // Simulated unavailable dates
      unavailableDates: ["2025-04-01", "2025-04-02", "2025-04-03", "2025-04-25", "2025-04-26"]
    },
    // Additional rooms...
    {
      id: 3,
      name: "Family Suites",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000",
      description: "Spacious accommodations ideal for families and groups wanting a comfortable stay.",
      longDescription: "Our Family Suites provide the perfect home-away-from-home experience for your loved ones.",
      features: ["Multiple bedrooms", "Kitchenette", "Living area", "From ₱3,500/night"],
      capacity: "4-5 Guests",
      size: "55 sqm",
      additionalImages: ["https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=1000"],
      amenities: ["Master bedroom with king-size bed", "Second bedroom with twin beds", "Sofa bed in living room"],
      policies: ["Check-in: 2:00 PM", "Check-out: 12:00 PM"],
      bedConfig: "1 King Bed, 2 Twin Beds, 1 Sofa Bed",
      view: "Garden or Pool View",
      price: 3500,
      maxGuests: 5,
      unavailableDates: ["2025-04-05", "2025-04-06", "2025-04-12", "2025-04-13"]
    },
    {
      id: 4,
      name: "Deluxe Ocean View",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      description: "Elegant rooms with breathtaking ocean views and premium amenities for a luxurious experience.",
      longDescription: "Indulge in luxury with our Deluxe Ocean View rooms. Floor-to-ceiling windows showcase panoramic views of the Philippine Sea.",
      features: ["Panoramic ocean view", "King-size bed", "Mini bar", "From ₱4,200/night"],
      capacity: "2 Guests",
      size: "38 sqm",
      additionalImages: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000"],
      amenities: ["Premium king-size bed with luxury linens", "Private balcony with seating"],
      policies: ["Check-in: 2:00 PM", "Check-out: 12:00 PM"],
      bedConfig: "1 King Bed",
      view: "Panoramic Ocean View",
      price: 4200,
      maxGuests: 2,
      unavailableDates: ["2025-04-18", "2025-04-19", "2025-04-20", "2025-04-21"]
    },
    {
      id: 5,
      name: "Barkada Room",
      image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&q=80&w=1000",
      description: "Designed for friend groups with multiple beds and a social space perfect for bonding.",
      longDescription: "The perfect accommodation for friend groups looking to create lasting memories together.",
      features: ["Multiple beds", "Game console", "Mini fridge", "From ₱5,000/night"],
      capacity: "4-8 Guests",
      size: "65 sqm",
      additionalImages: ["https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?auto=format&fit=crop&q=80&w=1000"],
      amenities: ["4 queen-size beds or 8 single beds", "Central lounge area"],
      policies: ["Check-in: 2:00 PM", "Check-out: 12:00 PM"],
      bedConfig: "Flexible: 4 Queen Beds or 8 Single Beds",
      view: "Garden or Pool View",
      price: 5000,
      maxGuests: 8,
      unavailableDates: ["2025-04-07", "2025-04-08", "2025-04-09", "2025-04-22", "2025-04-23"]
    },
    {
      id: 6,
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
      description: "Our premium suite offering the ultimate luxury experience with separate living areas and exclusive amenities.",
      longDescription: "Experience the pinnacle of luxury with our Executive Suite.",
      features: ["Separate living room", "Jacuzzi tub", "Complimentary spa access", "From ₱6,500/night"],
      capacity: "2-3 Guests",
      size: "78 sqm",
      additionalImages: ["https://images.unsplash.com/photo-1609949279531-cf48d64a889a?auto=format&fit=crop&q=80&w=1000"],
      amenities: ["Master bedroom with premium king-size bed", "Separate living room with designer furniture"],
      policies: ["Check-in: 2:00 PM", "Check-out: 12:00 PM"],
      bedConfig: "1 King Bed + Optional Rollaway",
      view: "Premium Ocean or Mountain View",
      price: 6500,
      maxGuests: 3,
      unavailableDates: ["2025-04-14", "2025-04-15", "2025-04-16", "2025-04-17"]
    }
  ];

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated) {
      navigate("/contact"); // Redirect to login page
      return;
    }
    
    // Update email if user is logged in
    if (user && user.email) {
      setBooking(prev => ({
        ...prev,
        email: user.email
      }));
    }
    
    // Set loading state
    setLoading(false);
  }, [isAuthenticated, navigate, user]);

  // Get price from features array or price field
  const getRoomPrice = (room) => {
    if (room.price) return room.price;
    
    const priceFeature = room.features.find(feature => feature.includes('₱'));
    if (priceFeature) {
      return parseInt(priceFeature.replace(/[^0-9]/g, ''));
    }
    return 0;
  };

  // Handle quantity change for per-person add-ons
  const handleQuantityChange = (addonId, quantity) => {
    setAddonQuantities(prev => ({
      ...prev,
      [addonId]: parseInt(quantity)
    }));
  };

  // Calculate addon total
  const calculateAddOnsTotal = () => {
    return selectedAddOns.reduce((total, addon) => {
      const addonItem = addOns.find(item => item.id === addon);
      if (!addonItem) return total;
      
      if (addonItem.perPerson) {
        // Use custom quantity if specified, otherwise use number of guests
        const quantity = addonQuantities[addon] || booking.numberOfGuests;
        return total + (addonItem.price * quantity);
      }
      return total + addonItem.price;
    }, 0);
  };

  // Calculate number of nights and total price
  const calculateTotal = () => {
    if (!booking.checkInDate || !booking.checkOutDate) return 0;
    
    const checkIn = new Date(booking.checkInDate);
    const checkOut = new Date(booking.checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    const roomTotal = booking.roomPrice * nights;
    const addOnsTotal = calculateAddOnsTotal();
    
    return roomTotal + addOnsTotal;
  };

  // Toggle room selection
  const toggleRoomSelection = (room) => {
    if (selectedRoom && selectedRoom.id === room.id) {
      // Unselect the room
      setSelectedRoom(null);
      setBooking(prev => ({
        ...prev,
        roomId: "",
        roomName: "",
        roomPrice: 0
      }));
    } else {
      // Select the room
      setSelectedRoom(room);
      setBooking(prev => ({
        ...prev,
        roomId: room.id,
        roomName: room.name,
        roomPrice: getRoomPrice(room)
      }));
    }
    
    // Reset availability check when room changes
    setAvailabilityChecked(false);
    setIsRoomAvailable(true);
  };

  // View room details
  const viewRoomDetails = (room) => {
    setPreviewRoom(room);
    setShowRoomPreview(true);
  };

  // Close room preview
  const closeRoomPreview = () => {
    setShowRoomPreview(false);
  };

  // Toggle add-on selection
  const toggleAddOn = (addonId) => {
    setSelectedAddOns(prevSelected => {
      if (prevSelected.includes(addonId)) {
        return prevSelected.filter(id => id !== addonId);
      } else {
        return [...prevSelected, addonId];
      }
    });
  };

  // Update booking state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  // Check room availability based on dates
  const checkRoomAvailability = () => {
    if (!selectedRoom || !booking.checkInDate || !booking.checkOutDate) return false;
    
    // Get all dates between check-in and check-out
    const dates = [];
    const current = new Date(booking.checkInDate);
    const end = new Date(booking.checkOutDate);
    
    while (current < end) {
      dates.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }
    
    // Check if any selected date is in unavailable dates
    const hasUnavailableDate = dates.some(date => 
      selectedRoom.unavailableDates.includes(date)
    );
    
    setAvailabilityChecked(true);
    setIsRoomAvailable(!hasUnavailableDate);
    
    return !hasUnavailableDate;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      // Validate room selection
      if (!selectedRoom) {
        alert("Please select a room to continue.");
        return;
      }
    } else if (currentStep === 2) {
      // Nothing to validate for add-ons, they're optional
      // Calculate add-ons total
      const addOnsTotal = calculateAddOnsTotal();
      setBooking(prev => ({ ...prev, addOnsAmount: addOnsTotal }));
    } else if (currentStep === 3) {
      // Validate date selection
      if (!booking.checkInDate || !booking.checkOutDate) {
        alert("Please select check-in and check-out dates.");
        return;
      }
      
      // Check if check-out is after check-in
      if (new Date(booking.checkOutDate) <= new Date(booking.checkInDate)) {
        alert("Check-out date must be after check-in date.");
        return;
      }
      
      // Check availability
      if (!checkRoomAvailability()) {
        alert("Sorry, this room is not available for the selected dates. Please choose different dates.");
        return;
      }
      
      // Calculate total amount
      const total = calculateTotal();
      setBooking(prev => ({ ...prev, totalAmount: total }));
    }
    
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0); // Scroll to top when changing steps
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0); // Scroll to top when changing steps
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Only validate payment information on final submit
    if (currentStep === 4) {
      // Check if credit card was selected and validate credit card fields
      if (booking.paymentMethod === "credit_card" && 
         (!booking.cardNumber || !booking.cardHolder || !booking.expiryDate || !booking.cvv)) {
        alert("Please fill in all payment details.");
        return;
      }
      
      setLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Get selected add-ons details
        const selectedAddOnsDetails = addOns.filter(addon => 
          selectedAddOns.includes(addon.id)
        ).map(addon => ({
          ...addon,
          quantity: addon.perPerson ? (addonQuantities[addon.id] || booking.numberOfGuests) : 1
        }));
        
        // Generate booking confirmation
        const bookingData = {
          ...booking,
          confirmationNumber: `ELP-${Math.floor(100000 + Math.random() * 900000)}`,
          bookingDate: new Date().toISOString(),
          roomImage: selectedRoom.image,
          roomView: selectedRoom.view,
          roomCapacity: selectedRoom.capacity,
          nights: Math.ceil((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24)),
          addOns: selectedAddOnsDetails
        };
        
        // Show success and redirect
        navigate("/booking-confirmation", { state: { booking: bookingData } });
      } catch (error) {
        alert("There was an error processing your booking. Please try again.");
        console.error("Booking error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Render date availability calendar
  const renderAvailabilityCalendar = () => {
    if (!selectedRoom) return null;
    
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    const nextThreeMonths = [];
    for (let i = 0; i < 90; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      
      const dateString = date.toISOString().split('T')[0];
      const isUnavailable = selectedRoom.unavailableDates.includes(dateString);
      
      nextThreeMonths.push({
        date,
        dateString,
        isUnavailable
      });
    }
    
    return nextThreeMonths;
  };

  // Render specific step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold ml-3 text-gray-800 font-playfair">Select Your Perfect Room</h2>
            </div>
            
            <p className="text-gray-600 mb-6">Choose from our selection of premium accommodations designed for your comfort and enjoyment.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allRooms.map((room) => (
                <div 
                  key={room.id}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    selectedRoom && selectedRoom.id === room.id 
                      ? "border-2 border-teal-600 shadow-lg" 
                      : "border-gray-200 hover:shadow-lg"
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {room.capacity}
                      </span>
                      <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {room.size}
                      </span>
                    </div>
                    {selectedRoom && selectedRoom.id === room.id && (
                      <div className="absolute top-0 right-0 m-2 bg-teal-600 rounded-full p-1">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 font-playfair">{room.name}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{room.description}</p>
                    
                    <div className="mt-2">
                      <span className="text-teal-600 font-bold text-lg">₱{getRoomPrice(room).toLocaleString()}</span>
                      <span className="text-gray-600"> / night</span>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => viewRoomDetails(room)}
                        className="text-teal-600 text-sm font-medium hover:underline flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Details
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => toggleRoomSelection(room)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          selectedRoom && selectedRoom.id === room.id
                            ? "bg-teal-100 text-teal-700 hover:bg-teal-200"
                            : "bg-teal-600 text-white hover:bg-teal-700"
                        }`}
                      >
                        {selectedRoom && selectedRoom.id === room.id ? "Selected" : "Select Room"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Room Summary */}
            {selectedRoom && (
              <div className="mt-8 p-5 bg-teal-50 rounded-lg border border-teal-100 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Your Selection
                </h3>
                <div className="flex items-center mt-2">
                  <img 
                    src={selectedRoom.image} 
                    alt={selectedRoom.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">{selectedRoom.name}</p>
                    <p className="text-teal-600 font-semibold">₱{getRoomPrice(selectedRoom).toLocaleString()} per night</p>
                    <p className="text-sm text-gray-600">{selectedRoom.capacity} • {selectedRoom.bedConfig}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 2:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold ml-3 text-gray-800 font-playfair">Enhance Your Stay</h2>
            </div>
            
            <p className="text-gray-600 mb-6">Select additional services and amenities to make your stay even more special.</p>
            
            {/* Selected Room Reminder */}
            {selectedRoom && (
              <div className="mb-6 p-4 bg-gray-50 rounded-md flex items-center border border-gray-200">
                <img 
                  src={selectedRoom.image} 
                  alt={selectedRoom.name} 
                  className="w-16 h-16 object-cover rounded-md mr-3"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{selectedRoom.name}</h3>
                  <p className="text-teal-600 font-medium">₱{getRoomPrice(selectedRoom).toLocaleString()} per night</p>
                  <p className="text-xs text-gray-600">{selectedRoom.capacity} • {selectedRoom.view}</p>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {addOns.map((addon) => (
                <div 
                  key={addon.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedAddOns.includes(addon.id) 
                      ? "border-teal-600 bg-teal-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleAddOn(addon.id)}
                >
                  <div className="flex space-x-4">
                    <img 
                      src={addon.image} 
                      alt={addon.name} 
                      className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{addon.name}</h3>
                        <div 
                          className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                            selectedAddOns.includes(addon.id) 
                              ? "bg-teal-600 border-teal-600" 
                              : "border-gray-300"
                          }`}
                        >
                          {selectedAddOns.includes(addon.id) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <div>
                          <span className="text-teal-600 font-semibold">₱{addon.price.toLocaleString()}</span>
                          {addon.perPerson && <span className="text-xs text-gray-500"> per person</span>}
                        </div>
                        {selectedAddOns.includes(addon.id) && (
                          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                            Selected
                          </span>
                        )}
                      </div>
                      
                      {/* Add quantity selector for per-person add-ons */}
                      {addon.perPerson && selectedAddOns.includes(addon.id) && (
                        <div className="mt-3 flex items-center">
                          <label className="text-sm text-gray-700 mr-2">Number of people:</label>
                          <select 
                            value={addonQuantities[addon.id] || booking.numberOfGuests}
                            onChange={(e) => handleQuantityChange(addon.id, e.target.value)}
                            className="border border-gray-300 rounded-md py-1 px-2 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {[...Array(Math.max(8, booking.numberOfGuests))].map((_, idx) => (
                              <option key={idx} value={idx + 1}>
                                {idx + 1} {idx === 0 ? 'person' : 'people'}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Selected Add-ons Summary */}
            {selectedAddOns.length > 0 && (
              <div className="mt-8 p-5 bg-teal-50 rounded-lg border border-teal-100">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Selected Add-ons
                </h3>
                
                <div className="space-y-2">
                  {selectedAddOns.map(addonId => {
                    const addon = addOns.find(item => item.id === addonId);
                    if (!addon) return null;
                    
                    let quantity = 1;
                    let totalPrice = addon.price;
                    
                    if (addon.perPerson) {
                      quantity = addonQuantities[addon.id] || booking.numberOfGuests;
                      totalPrice = addon.price * quantity;
                    }
                    
                    return (
                      <div key={addon.id} className="flex justify-between">
                        <span className="text-gray-800">
                          {addon.name}
                          {addon.perPerson && ` (${quantity} ${quantity === 1 ? 'person' : 'people'})`}
                        </span>
                        <span className="text-teal-700">₱{totalPrice.toLocaleString()}</span>
                      </div>
                    );
                  })}
                  
                  <div className="border-t border-teal-200 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Add-ons Subtotal:</span>
                      <span>₱{calculateAddOnsTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6 text-sm text-gray-600 text-center">
              <p>All add-ons are subject to availability and can be modified up until check-in.</p>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold ml-3 text-gray-800 font-playfair">Choose Your Dates</h2>
            </div>
            
            {/* Selected Room Reminder */}
            {selectedRoom && (
              <div className="mb-6 p-4 bg-gray-50 rounded-md flex items-center border border-gray-200">
                <img 
                  src={selectedRoom.image} 
                  alt={selectedRoom.name} 
                  className="w-16 h-16 object-cover rounded-md mr-3"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{selectedRoom.name}</h3>
                  <p className="text-teal-600 font-medium">₱{getRoomPrice(selectedRoom).toLocaleString()} per night</p>
                  <p className="text-xs text-gray-600">{selectedRoom.capacity} • {selectedRoom.view}</p>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Check the availability calendar below. Red dates are unavailable. Please select available dates for your stay.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Check-in Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      name="checkInDate"
                      value={booking.checkInDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Check-out Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={booking.checkOutDate}
                      onChange={handleChange}
                      min={booking.checkInDate || new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability Calendar */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Availability Calendar</h3>
              <div className="p-4 border border-gray-200 rounded-md max-h-60 overflow-y-auto">
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {renderAvailabilityCalendar().map((dateInfo, index) => {
                    const dayOfWeek = dateInfo.date.getDay();
                    // Add empty cells for the first week
                    if (index === 0) {
                      const emptyCells = Array(dayOfWeek).fill(null);
                      return [
                        ...emptyCells.map((_, i) => (
                          <div key={`empty-${i}`} className="h-8 p-1"></div>
                        )),
                        <div 
                          key={dateInfo.dateString} 
                          className={`h-8 p-1 flex items-center justify-center rounded-full text-xs font-medium ${
                            dateInfo.isUnavailable
                              ? "bg-red-100 text-red-800"
                              : "hover:bg-gray-100 cursor-pointer"
                          }`}
                          onClick={() => {
                            if (!dateInfo.isUnavailable) {
                              setBooking(prev => ({ ...prev, checkInDate: dateInfo.dateString }))
                            }
                          }}
                        >
                          {dateInfo.date.getDate()}
                        </div>
                      ];
                    }
                    
                    return (
                      <div 
                        key={dateInfo.dateString} 
                        className={`h-8 p-1 flex items-center justify-center rounded-full text-xs font-medium ${
                          dateInfo.isUnavailable
                            ? "bg-red-100 text-red-800"
                            : "hover:bg-gray-100 cursor-pointer"
                        }`}
                        onClick={() => {
                          if (!dateInfo.isUnavailable) {
                            // If a check-in date is already selected and this is after it
                            if (booking.checkInDate && dateInfo.dateString > booking.checkInDate) {
                              setBooking(prev => ({ ...prev, checkOutDate: dateInfo.dateString }))
                            } else {
                              setBooking(prev => ({ ...prev, checkInDate: dateInfo.dateString }))
                            }
                          }
                        }}
                      >
                        {dateInfo.date.getDate()}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
                  <span className="text-gray-600">Unavailable</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-100 rounded-full mr-2"></div>
                  <span className="text-gray-600">Available</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <select
                    name="numberOfGuests"
                    value={booking.numberOfGuests}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {selectedRoom && (
                      <>
                        {[...Array(selectedRoom.maxGuests)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email for Confirmation</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={booking.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
              <textarea
                name="specialRequests"
                value={booking.specialRequests}
                onChange={handleChange}
                placeholder="Let us know if you have any special requirements or preferences..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 h-28"
              ></textarea>
            </div>
            
            {/* Availability Check */}
            {booking.checkInDate && booking.checkOutDate && (
              <div className="mb-6">
                <button
                  type="button"
                  onClick={checkRoomAvailability}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Check Availability
                </button>
                
                {availabilityChecked && (
                  <div className={`mt-4 p-4 rounded-lg ${isRoomAvailable ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        {isRoomAvailable ? (
                          <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className={`text-sm font-medium ${isRoomAvailable ? 'text-green-800' : 'text-red-800'}`}>
                          {isRoomAvailable ? 'Room is available!' : 'Room is not available for the selected dates'}
                        </h3>
                        <div className="mt-2 text-sm">
                          <p className={isRoomAvailable ? 'text-green-700' : 'text-red-700'}>
                            {isRoomAvailable 
                              ? 'Great news! The room is available for your selected dates.' 
                              : 'Please select different dates as the room is not available for your current selection.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {booking.checkInDate && booking.checkOutDate && (
              <div className="mt-6 p-5 bg-teal-50 rounded-lg border border-teal-100">
                <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Check-in:</span>
                    <span className="font-medium text-gray-800">{new Date(booking.checkInDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Check-out:</span>
                    <span className="font-medium text-gray-800">{new Date(booking.checkOutDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Nights:</span>
                    <span className="font-medium text-gray-800">
                      {Math.ceil(
                        (new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / 
                        (1000 * 60 * 60 * 24)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Room rate:</span>
                    <span className="font-medium text-gray-800">₱{booking.roomPrice.toLocaleString()} per night</span>
                  </div>
                  
                  {selectedAddOns.length > 0 && (
                    <div className="pt-2 mt-2 border-t border-teal-200">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Add-ons:</span>
                        <span className="font-medium text-gray-800">₱{calculateAddOnsTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-2 mt-2 border-t border-teal-200">
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-semibold">Total:</span>
                      <span className="text-teal-700 font-bold">₱{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 4:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold ml-3 text-gray-800 font-playfair">Payment Details</h2>
            </div>
            
            <div className="mb-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img 
                  src={selectedRoom.image} 
                  alt={selectedRoom.name} 
                  className="w-full md:w-32 h-24 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <p><span className="font-medium text-gray-700">Room:</span> <span className="text-gray-800">{booking.roomName}</span></p>
                  <p><span className="font-medium text-gray-700">Dates:</span> <span className="text-gray-800">{new Date(booking.checkInDate).toLocaleDateString()} to {new Date(booking.checkOutDate).toLocaleDateString()}</span></p>
                  <p><span className="font-medium text-gray-700">Guests:</span> <span className="text-gray-800">{booking.numberOfGuests}</span></p>
                  <p><span className="font-medium text-gray-700">Nights:</span> <span className="text-gray-800">{Math.ceil((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24))}</span></p>
                  
                  {selectedAddOns.length > 0 && (
                    <div className="mt-2">
                      <p className="font-medium text-gray-700">Add-ons:</p>
                      <ul className="text-sm text-gray-800 mt-1 pl-4">
                        {selectedAddOns.map(addonId => {
                          const addon = addOns.find(item => item.id === addonId);
                          if (!addon) return null;
                          
                          const quantity = addon.perPerson ? (addonQuantities[addon.id] || booking.numberOfGuests) : 1;
                          
                          return (
                            <li key={addon.id} className="list-disc list-inside">
                              {addon.name} 
                              {addon.perPerson ? 
                                ` - ₱${addon.price.toLocaleString()} × ${quantity} ${quantity === 1 ? 'person' : 'people'}` : 
                                ` - ₱${addon.price.toLocaleString()}`}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-teal-700">₱{booking.totalAmount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Amount</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-3">Payment Method</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${booking.paymentMethod === "credit_card" ? "border-teal-500 bg-teal-50" : "border-gray-300 hover:border-gray-400"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit_card"
                    checked={booking.paymentMethod === "credit_card"}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-teal-600 hidden"
                  />
                  <div className="flex items-center w-full">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${booking.paymentMethod === "credit_card" ? "border-teal-600" : "border-gray-400"}`}>
                      {booking.paymentMethod === "credit_card" && (
                        <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                      )}
                    </div>
                    <div className="ml-3 flex-grow">
                      <span className="font-medium text-gray-800">Credit Card</span>
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Credit Card" className="w-8 h-8" />
                  </div>
                </label>
                
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${booking.paymentMethod === "gcash" ? "border-teal-500 bg-teal-50" : "border-gray-300 hover:border-gray-400"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="gcash"
                    checked={booking.paymentMethod === "gcash"}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-teal-600 hidden"
                  />
                  <div className="flex items-center w-full">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${booking.paymentMethod === "gcash" ? "border-teal-600" : "border-gray-400"}`}>
                      {booking.paymentMethod === "gcash" && (
                        <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                      )}
                    </div>
                    <div className="ml-3 flex-grow">
                      <span className="font-medium text-gray-800">GCash</span>
                    </div>
                    <img src="src/assets/gcash.png" alt="GCash" className="w-14 h-8" />
                  </div>
                </label>
                
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${booking.paymentMethod === "paypal" ? "border-teal-500 bg-teal-50" : "border-gray-300 hover:border-gray-400"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={booking.paymentMethod === "paypal"}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-teal-600 hidden"
                  />
                  <div className="flex items-center w-full">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${booking.paymentMethod === "paypal" ? "border-teal-600" : "border-gray-400"}`}>
                      {booking.paymentMethod === "paypal" && (
                        <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                      )}
                    </div>
                    <div className="ml-3 flex-grow">
                      <span className="font-medium text-gray-800">PayPal</span>
                    </div>
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="w-8 h-8" />
                  </div>
                </label>
              </div>
            </div>
            
            {booking.paymentMethod === "credit_card" && (
              <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="cardNumber"
                      value={booking.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Card Holder Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="cardHolder"
                      value={booking.cardHolder}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="expiryDate"
                        value={booking.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">CVV</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="cvv"
                        value={booking.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {booking.paymentMethod === "gcash" && (
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex justify-center mb-4">
                  <img src="https://i.imgur.com/QnlNfrl.png" alt="GCash" className="h-14" />
                </div>
                <p className="text-gray-700 mb-3">You will be redirected to GCash to complete your payment after confirmation.</p>
                <p className="text-blue-600 font-medium mb-4">Total: ₱{booking.totalAmount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">A detailed receipt will be sent to your email after payment</p>
              </div>
            )}
            
            {booking.paymentMethod === "paypal" && (
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex justify-center mb-4">
                  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="h-14" />
                </div>
                <p className="text-gray-700 mb-3">You will be redirected to PayPal to complete your payment after confirmation.</p>
                <p className="text-blue-600 font-medium mb-4">Total: ₱{booking.totalAmount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">A detailed receipt will be sent to your email after payment</p>
              </div>
            )}

            <div className="mt-6 text-center text-gray-600 text-sm">
              <p>By completing this booking, you agree to our <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a></p>
              <p className="mt-2 flex items-center justify-center text-gray-500">
                <svg className="w-4 h-4 mr-1 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                A booking confirmation will be sent to your email
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <>
        <MainNavbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <MainNavbar />
      <div className="bg-gray-100 min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center font-playfair">Book Your Stay</h1>
            <p className="text-center text-gray-600 mt-2">Complete the steps below to secure your reservation</p>
            
            {/* Booking Steps */}
            <div className="flex justify-between items-center max-w-4xl mx-auto mt-8 px-4">
              {[
                {step: 1, name: 'Select Room', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'},
                {step: 2, name: 'Add-ons', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'},
                {step: 3, name: 'Choose Dates', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'},
                {step: 4, name: 'Payment', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'}
              ].map(({step, name, icon}) => (
                <div key={step} className="flex flex-col items-center relative">
                  {/* Connecting line */}
                  {step > 1 && (
                    <div className={`absolute top-5 -left-1/2 w-full h-0.5 ${currentStep > step ? 'bg-teal-600' : 'bg-gray-300'}`}></div>
                  )}
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep > step 
                      ? 'bg-teal-600 text-white' 
                      : currentStep === step
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-300 text-gray-600'
                  }`}>
                    {currentStep > step ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                    )}
                  </div>
                  <span className={`mt-2 text-sm ${
                    currentStep === step ? 'text-teal-600 font-medium' : 'text-gray-600'
                  }`}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="transition-all duration-300">
            {renderStepContent()}
            
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePreviousStep}
                className={`flex items-center px-6 py-2 rounded-md text-gray-600 font-medium transition-colors ${
                  currentStep === 1 
                    ? 'opacity-0 cursor-default' 
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
                disabled={currentStep === 1}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center px-6 py-2 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors"
                >
                  Next
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-6 py-2 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Complete Booking
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Room Details Preview Modal */}
      {showRoomPreview && previewRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto transition-opacity duration-300">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Modal header with close button */}
            <div className="sticky top-0 bg-white p-5 border-b border-gray-200 flex justify-between items-center z-10">
              <h3 className="text-2xl font-playfair text-teal-600 font-bold">
                {previewRoom.name}
              </h3>
              <button
                onClick={closeRoomPreview}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Modal content */}
            <div className="p-5">
              {/* Image gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="md:col-span-2">
                  <img
                    src={previewRoom.image}
                    alt={previewRoom.name}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 h-60">
                  {previewRoom.additionalImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${previewRoom.name} detail ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Room info */}
              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">About This Room</h4>
                <p className="text-gray-600 mb-4">
                  {previewRoom.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="block text-sm text-gray-500">Room Size</span>
                    <span className="font-medium">{previewRoom.size}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="block text-sm text-gray-500">Capacity</span>
                    <span className="font-medium">{previewRoom.capacity}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="block text-sm text-gray-500">Bed Configuration</span>
                    <span className="font-medium">{previewRoom.bedConfig}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="block text-sm text-gray-500">View</span>
                    <span className="font-medium">{previewRoom.view}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">Room Amenities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                  {previewRoom.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center py-1.5">
                      <svg
                        className="w-5 h-5 text-teal-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
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
                  {previewRoom.policies.map((policy, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
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
                  <span className="text-2xl font-bold text-teal-600">₱{getRoomPrice(previewRoom).toLocaleString()}/night</span>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <button
                    onClick={closeRoomPreview}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      toggleRoomSelection(previewRoom);
                      closeRoomPreview();
                    }}
                    className="px-6 py-2 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors"
                  >
                    {selectedRoom && selectedRoom.id === previewRoom.id ? "Unselect Room" : "Select Room"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default BookingPage;
