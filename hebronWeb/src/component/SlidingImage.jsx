import React, { useEffect, useState } from 'react'
import { eventImages } from '../constants/data'

const SlidingImage = () => {
    const [slideIndex, setSlideIndex] = useState(0);
      const totalSlides = Math.ceil(eventImages.length / 3);
    useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) =>
        prev + 1 >= totalSlides ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);
  return (
      <div className="w-full overflow-hidden rounded-xl bg-[#FAFAF0] p-6">
      
      {/* IMAGE STRIP */}
      <div
        className="flex transition-transform duration-700 gap-6"
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${slideIndex * 100}%)`,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, groupIndex) => {
          const start = groupIndex * 3;
          const group = eventImages.slice(start, start + 3);

          return (
            <div key={groupIndex} className="flex w-full gap-6 flex-shrink-0">
              {group.map((src, i) => (
                <div key={i} className="w-1/3">
                  <img
                    src={src}
                    className="w-full h-56 rounded-xl object-cover"
                    alt="event"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full transition-all ${
              i === slideIndex ? "bg-gray-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SlidingImage
