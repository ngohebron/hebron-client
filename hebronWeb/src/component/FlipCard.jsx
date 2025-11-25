import React from 'react'
import { causes } from '../constants/data'

const FlipCard = () => {
    
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {causes.map((item, index) => {
        const percent = (item.raised / item.goal) * 100;

        return (
          <div key={index} className="w-80 h-60 [perspective:1000px]">
            {/* Flip Container */}
            <div
              className="relative w-full h-full transition-transform duration-700 
              [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] "
            >
              {/* FRONT — IMAGE */}
              <div
                className="absolute inset-0 bg-gray-200 rounded-2xl shadow-lg 
                overflow-hidden [backface-visibility:hidden]"
              >
                <img
                  src={`/donationFood/${index + 1}.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>

              {/* BACK — CARD */}
              <div
                className="absolute inset-0 
                bg-[linear-gradient(90deg,#43846D_0%,#234639_50%,#43846D_100%)]
                rounded-2xl shadow-lg p-6 flex flex-col justify-between
                [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div className="bg-white w-full p-3 rounded-lg shadow">
                  <h2 className="text-sm font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-xs text-gray-600 mb-1">Fund Raised</p>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-customGreen"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-700">
                    <span>₹ {item.raised.toLocaleString()}</span>
                    <span>₹ {item.goal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  className="bg-white text-customGreen font-semibold py-2 px-3 
                  text-xs rounded-full shadow hover:bg-gray-100 transition"
                >
                  Support
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default FlipCard
