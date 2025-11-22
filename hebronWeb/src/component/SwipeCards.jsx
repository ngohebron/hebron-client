import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SwipeCards = () => {
    const testimonials = [
  {
    image: "/aboutus/p1.jpg", 
    title: "When you're hungry, even kindness tastes like food.",
    text: `Shashi, a single mother from Nashik, shared that the daily lunch packets from Hebron helped her save enough money to send her children back to school.`,
    author: "Shashi",
  },
  {
    image: "/aboutus/p1.jpg",
    title: "Every meal restores dignity.",
    text: "Your support helped Anaya get back on her feet and rebuild her life through hope and nourishment.",
    author: "Anaya",
  },
  {
    image: "/aboutus/p1.jpg",
    title: "Food is more than hunger — it's hope.",
    text: "Daily meals helped Rohan stay healthy and focus on finding work again.",
    author: "Rohan",
  },
];
  return (
     <div className="relative w-full md:w-1/2 px-10 md:px-12 mx-auto">
  <Swiper
    modules={[Navigation]}
    navigation={{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }}
    loop
    spaceBetween={16}
    slidesPerView={1}
    className="rounded-xl md:rounded-2xl"
  >
    {testimonials.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col md:flex-row h-auto md:h-80 bg-[#F7F7EF] rounded-xl md:rounded-2xl overflow-hidden shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 h-80 md:h-auto">
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt="testimonial"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
            <h1 className="text-lg md:text-lg lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 leading-tight md:leading-snug">
              {item.title}
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-2 md:mb-4 line-clamp-3">
              {item.text}
            </p>
            <p className="text-gray-800 font-semibold text-xs md:text-sm lg:text-base">-{item.author}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Navigation Buttons - Mobile Optimized */}
  <button className="custom-prev absolute left-1 top-1/2 -translate-y-1/2 -left-3 md:-left-8 z-10 w-7 h-7 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-md md:shadow-lg flex items-center justify-center cursor-pointer hover:bg-white active:scale-95 md:hover:scale-110 transition-all duration-200 border border-gray-200">
    <svg className="w-3 h-3 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <button className="custom-next absolute right-1 top-1/2 -translate-y-1/2 -right-3 md:-right-8 z-10 w-7 h-7 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-md md:shadow-lg flex items-center justify-center cursor-pointer hover:bg-white active:scale-95 md:hover:scale-110 transition-all duration-200 border border-gray-200">
    <svg className="w-3 h-3 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
  )
}

export default SwipeCards
