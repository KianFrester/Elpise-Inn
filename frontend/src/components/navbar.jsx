import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


const NavLink = ({ path, label, isActive, onClick }) => (
  <Link
    to={path}
    onClick={onClick}
    className={`text-white font-medium text-[1.05rem] tracking-wide transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-teal-600 after:left-0 after:-bottom-1.5 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-teal-600 after:w-full' : 'hover:text-teal-600'}`}
  >
    {label}
  </Link>
);

const Navbar = () => {
  const { login, register, isAuthenticated } = useKindeAuth();
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home_page");
    }
  }, [isAuthenticated, navigate]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/rooms", label: "Rooms" },
    { path: "/amenities", label: "Amenities" },
    { path: "/contact", label: "Contact" },
    { path: "/booking", label: "Booking" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-[5%] py-5 bg-gray-800 shadow-md sticky top-0 z-50">
        <Link
          to="/"
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 mr-3">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#4f9a94" stroke="#2d5753" strokeWidth="1.5" />
              <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="white" stroke="#4f9a94" strokeWidth="1" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-teal-600 tracking-wide font-playfair">
            Elpise Inn Hostel
          </h1>
        </Link>

        <button className="lg:hidden p-2.5 z-[101]" onClick={toggleSidebar}>
          <div className="w-7.5 h-0.75 bg-teal-600 relative before:content-[''] before:absolute before:w-7.5 before:h-0.75 before:bg-teal-600 before:-translate-y-2.5 before:transition-all before:duration-300 after:content-[''] after:absolute after:w-7.5 after:h-0.75 after:bg-teal-600 after:translate-y-2.5 after:transition-all after:duration-300"></div>
        </button>

        <div className="hidden lg:flex items-center">
          <div className="flex gap-7">
            {routes.map(({ path, label }) => (
              <NavLink
                key={path}
                path={path}
                label={label}
                isActive={isActive(path)}
              />
            ))}
          </div>

          <div className="flex gap-4 ml-8">
            <button
              onClick={login}
              className="px-5 py-2.5 rounded border border-teal-600 text-teal-600 font-medium text-[0.95rem] tracking-wide transition-all duration-300 hover:bg-teal-600 hover:text-white"
            >
              Sign In
            </button>
            <button
              onClick={register}
              className="px-5 py-2.5 rounded bg-teal-700 border border-teal-700 text-white font-medium text-[0.95rem] tracking-wide transition-all duration-300 hover:bg-teal-700"
            >
              Register
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-[300px] h-full bg-gray-800 shadow-lg z-[1000] transition-all duration-300 ease-in-out overflow-y-auto p-6 flex flex-col ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="sidebar"
        >
          <div className="flex justify-between items-center mb-8 text-center">
            <Link
              to="/"
              className="flex items-center cursor-pointer"
              onClick={closeSidebar}
            >
              <div className="w-10 h-10">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#4f9a94" stroke="#2d5753" strokeWidth="1.5" />
                  <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="white" stroke="#4f9a94" strokeWidth="1" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-teal-600 tracking-wide font-playfair ml-2">
                Elpise Inn Hostel
              </h1>
            </Link>
            <button className="text-4xl text-teal-600" onClick={closeSidebar}>
              ×
            </button>
          </div>

          <div className="flex flex-col gap-6 mb-8 text-center">
            {routes.map(({ path, label }) => (
              <NavLink
                key={path}
                path={path}
                label={label}
                isActive={isActive(path)}
                onClick={closeSidebar}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={login}
              className="px-5 py-2.5 rounded border border-teal-600 text-teal-600 font-medium text-[0.95rem] tracking-wide transition-all duration-300 hover:bg-teal-50"
            >
              Sign In
            </button>
            <button
              onClick={register}
              className="px-5 py-2.5 rounded bg-teal-600 border border-teal-600 text-white font-medium text-[0.95rem] tracking-wide transition-all duration-300 hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
