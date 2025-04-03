import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
const Booking = () => {
  const { login, register } = useKindeAuth();
  return (
    <>
      <Navbar />
      <div className="min-h-auto bg-gray-100 flex flex-col py-12">
        <div className="text-center">
          <svg
            className="w-40 h-40 mx-auto text-teal-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 className="mt-5 text-6xl font-bold text-gray-800">
            Please Login
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-gray-700">
            Login your account to Contact Us!
          </h2>

          <br />
          <div className="flex justify-center gap-4">
            <button
              onClick={() => login()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md
                    transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Login
            </button>
            <button
              onClick={() => register()}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-md
                    transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
