import Navbar from "./components/navbar";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Room from "./pages/room.jsx";
import Amenities from "./pages/amenities.jsx";
import Contact from "./pages/contact.jsx";
import Booking from "./pages/booking.jsx";
import Footer from "./components/footer";

import Settings from "./main_pages/settings.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";
function App() {
 
  return (
    <>
   <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Room />
      <Amenities />
      <Contact />
      <Booking />
      <Settings />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
