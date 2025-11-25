import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="  py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold mr-2 text-gray-700">
                  Hebron <br /> Foundation
                </h2>
              </div>
              <div className="w-2/4 h-[4px] bg-gradient-to-r from-emerald-700 to-emerald-900 mb-2"></div>

              <p className="text-gray-700">
                H.No. B 23, Limbore Plot , Near Arun Cinema Theater, Dapodi,
                <br />
                Pune - 411012, Maharashtra
              </p>
              <p className="text-gray-700 mt-4">
                Contact us: <span className="text-emerald-800">8793235622</span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <span className="text-emerald-800">
                  info@hebronfoundation@gmail.com
                </span>
              </p>
            </div>

            <div className="mb-6 md:mb-0 flex flex-col gap-4">
              <span className="font-semibold text-4xl text-emerald-950">
                Trust that Walks <br /> Besides You
              </span>
              <div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="  text-white px-10 py-2 rounded-2xl 
    bg-gradient-to-r from-emerald-700 via-emerald-950 to-emerald-700
    hover:from-emerald-600 hover:via-emerald-950 hover:to-emerald-600
    transition-all duration-300 cursor-pointer shadow-xl
  "
                >
                  Support a Cause
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-4 mb-4 text-emerald-900">
              <a href="#!" className=" hover:text-emerald-700 underline">
                About Us
              </a>
              <a href="#!" className="hover:text-emerald-600 underline">
                What We Do
              </a>
              <a href="#!" className="hover:text-emerald-600 underline">
                Donate for a Cause
              </a>
              <a href="#!" className="hover:text-emerald-600 underline">
                Event Gallery
              </a>
              <a href="#!" className="hover:text-emerald-600 underline">
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-8  border-gray-700 flex flex-col md:flex-col justify-center items-center gap-4 ">
            <div className="p-10 mx-10">
              <span className="text-6xl font-semibold text-emerald-900/50">
                Hebron Foundation
              </span>
            </div>

            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Hebron Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 ">
              <a href="#!" className="text-emerald-900 hover:text-black">
                Terms of Service
              </a>
              <a href="#!" className="text-emerald-900 hover:text-black">
                Privacy Policy
              </a>
              <a href="#!" className="text-emerald-900 hover:text-black">
                Legal & Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
