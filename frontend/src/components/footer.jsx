import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white pt-16 pb-6 px-[10%]">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          <div className="min-w-[200px]">
            <h3 className="text-xl text-teal-500 mb-5 tracking-wide font-playfair">
              Elpise Inn Hostel
            </h3>
            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              Your paradise getaway in the Philippines
            </p>
          </div>

          <div className="min-w-[200px]">
            <h3 className="text-xl text-teal-500 mb-5 tracking-wide font-playfair">
              Contact Us
            </h3>
            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              📞 +63 912 345 6789
            </p>
            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              ✉️ info@elpiseinn.com
            </p>
            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              📍 Beachfront Avenue, Puerto Princesa, Palawan, Philippines
            </p>
          </div>

          <div className="min-w-[200px]">
            <h3 className="text-xl text-teal-500 mb-5 tracking-wide font-playfair">
              Follow Us
            </h3>
            <div className="flex gap-5">
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-7 border-t border-gray-700">
          <p className="text-gray-400 text-sm tracking-wide">
            © 2023 Elpise Inn Hostel. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
