import React, { useEffect, useState, useRef } from 'react'
import MainLayout from '../layout/MainLayout'
import { campaigns_data, eventImages } from '../constants/data'
import Footer from '../component/Footer'
const CampaignImagesCarousel = ({ images = [], slideCount = 3, interval = 3000, className = '' }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const normalized = images.length ? images : ['/placeholder.jpg'];
  const len = normalized.length;

  // compute visible images
  const getVisible = (index) => {
    const result = [];
    for (let i = 0; i < slideCount; i++) {
      result.push(normalized[(index + i) % len]);
    }
    return result;
  };

  const [visible, setVisible] = useState(() => getVisible(0));

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setStartIndex((prev) => (prev + 1) % len);
        setFading(false);
      }, 350);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [len, interval]);

  useEffect(() => {
    setVisible(getVisible(startIndex));
  }, [startIndex]);

  return (
    <div className={`campaign-carousel ${className} flex gap-4 items-stretch`}> 
      {visible.map((src, idx) => (
        <div key={idx} className={`w-1/3 rounded-2xl overflow-hidden transition-opacity duration-300 ${fading ? 'opacity-30' : 'opacity-100'}`}>
          <img src={src} alt={`gallery-${idx}`} className="w-full h-56 md:h-64 object-cover rounded-2xl" />
        </div>
      ))}
    </div>
  );
};
// no router hooks used in this page currently

const EventGallery = () => {
  // const navigate = useNavigate() // not used currently
  const heroImg = eventImages && eventImages.length > 0 ? eventImages[0] : '/eventgallery/hero-1.jpg'

  return (
    <MainLayout>
      {/* Hero */}
      <section className="w-full rounded-3xl overflow-hidden">
        <div className="relative">
          <img src={heroImg} alt="Our Journey" className="w-full h-72 md:h-96 object-cover rounded-3xl" />
          <div className="absolute inset-0 hero-overlay rounded-3xl" />
          <div className="absolute left-8 bottom-8 text-white event-hero-text">
            <p className="text-xs uppercase tracking-wider text-white/80">Event Gallery</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Our Journey Of Change</h1>
          </div>
        </div>
      </section>

      {/* Campaign's Gallery */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-[#234639] font-semibold mb-6">Campaign's Gallery</h2>

          <div className="space-y-8">
            {campaigns_data.map((item, idx) => (
              <div key={item.item_id} className="campaign-card grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                {/* Left text panel */}
                <div className="campaign-left text-white p-6 rounded-4xl shadow-md">
                  <h3 className="text-lg font-semibold mb-3">{item?.card?.title}</h3>
                  <p className="text-sm leading-6">{item?.card?.desc}</p>
                  <p className="text-sm mt-4 font-semibold">What we achieved: <span className="font-normal">Distributed over 8,000 freshly cooked meals across 6 villages in just 3 days.</span></p>
                </div>

                {/* Middle large image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={item?.card?.image} alt={item?.card?.title} className="w-full h-56 md:h-64 object-cover rounded-2xl" />
                </div>

                
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-[#234639] font-semibold mb-6">Cultural Events</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {eventImages.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md">
                <img src={img} alt={`event-${i}`} className="w-full h-36 md:h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}

export default EventGallery
