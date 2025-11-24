import React, { use, useEffect, useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Footer from "../component/Footer";
import SwipeCards from "../component/SwipeCards";
import { useLocation } from "react-router-dom";

function Campaign_page() {

  const location = useLocation();

  const item = location.state?.data;
  const [campaignData, setCampaignData] = useState(item || null);

 
  useEffect(() => {  console.log("Campaign Data:", item);   },[]);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState({
    meals: 0,
    kits: 0,
    districts: 0,
  });

  const targetValues = {
    meals: 100000, // 1 Lakh
    kits: 10000, // 10 Thousand
    districts: 100, // 100 Districts
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (start, end, setter) => {
      let current = start;
      const increment = (end - start) / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setter(Math.floor(current));
      }, stepDuration);
    };

    animateCounter(0, targetValues.meals, (val) =>
      setCounters((prev) => ({ ...prev, meals: val }))
    );
    animateCounter(0, targetValues.kits, (val) =>
      setCounters((prev) => ({ ...prev, kits: val }))
    );
    animateCounter(0, targetValues.districts, (val) =>
      setCounters((prev) => ({ ...prev, districts: val }))
    );
  }, [isVisible,hasAnimated]);

  const formatNumber = (num, type) => {
    if (type === "meals") {
      return (num / 100000).toFixed(2) + " Lakh";
    } else if (type === "kits") {
      return (num / 1000).toFixed(1) + " Thousand";
    } else {
      return num + " Districts";
    }
  };

  return (
    <MainLayout className=" w-full">
      <section className="w-full py-12 px-0">
        <div className="w-full">
          <img
            src="/campaign/image1.jpg"
            alt="image1"
            className="w-full h-150 object-cover rounded-4xl shadow-md"
          />
        </div>
      </section>

      {/* Quetion 1*/}
      <section className="  mx-1 px-6 rounded-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col  gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl  text-customGreen mb-4">
                What is <span className="font-semibold">{campaignData?.title} ?</span>{" "}
              </h2>
              <p className="text-lg  text-customGreen">
                {campaignData?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Section*/}
      <div className="flex items-center justify-center flex-col  md:flex-row py-10 px-6 gap-5">
        <div className=" md:w-1/2 ">
          <h1 className="text-xl text-[#1B3F32] mb-6">Why ?</h1>

          <p className="text-[#1B3F32] mb-4">
            {campaignData?.why_section?.para_01}
          </p>

          <p className="text-[#1B3F32] mb-4">
            {campaignData?.why_section?.para_02}
          </p>

          <p className="text-[#1B3F32]">
            Our Goal: {campaignData?.why_section?.our_goal}
          </p>
        </div>

        <div>
          <img
            src={campaignData?.why_section?.why_section_image}
            alt="image1"
            className="w-100 h-80 object-cover rounded-xl"
          />
        </div>
      </div>
     

      <section className=" py-10 mx-1 px-6 rounded-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col  gap-12">
            <p className="text-lg   text-customGreen">
                {campaignData?.bottom_description}
            </p>
            <button className="mt-5 border-emerald-900 w-fit border-2 p-1 px-2 rounded-2xl text-emerald-900 font-medium hover:cursor-pointer hover:text-emerald-700">
              Know how you can contribute
            </button>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className=" my-5 py-10 px-4 w-3/4 mx-auto rounded-3xl"
        style={{
          background:
            "linear-gradient(90deg, #43846D 0%, #234639 50%, #43846D 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Meals Served */}
            <div className="text-center text-gray-300 ">
              <div className="text-base ">Meals served</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {formatNumber(counters.meals, "meals").split(" ")[0]}
                <span className="text-lg font-semibold  uppercase tracking-wide mb-1">
                  {formatNumber(counters.meals, "meals").split(" ")[1]}
                </span>
              </div>
            </div>

            {/* Ration Kits */}
            <div className="text-center text-gray-300 ">
              <div className="text-base ">Ration Kits</div>
              <div className="text-4xl md:text-5xl font-bold  mb-2">
                {formatNumber(counters.kits, "kits").split(" ")[0]}
                <span className="text-lg font-semibold  uppercase tracking-wide mb-1">
                  {formatNumber(counters.kits, "kits").split(" ")[1]}
                </span>
              </div>
            </div>

            {/* Reach */}
            <div className="text-center text-gray-300 ">
              <div className="text-base ">Reach</div>
              <div className="text-4xl md:text-5xl font-bold  mb-2">
                {formatNumber(counters.districts, "districts").split(" ")[0]}
                <span className="text-lg font-semibold  uppercase tracking-wide mb-1">
                  {formatNumber(counters.districts, "districts").split(" ")[1]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" my-5 py-10 px-4 w-full flex-col  rounded-3xl flex items-center justify-center gap-5">
        <div className="flex items-center justify-center">
          <img src="/aboutus/p7.jpg" alt="" className="rounded-2xl w-3/4" />
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={(e) => e.preventDefault()}
            className="  text-white px-5 py-2 rounded-2xl 
    bg-emerald-900
    hover:from-emerald-600 hover:via-emerald-950 hover:to-emerald-600
    transition-all duration-300 cursor-pointer shadow-xl"
          >
            Support a Cause
          </button>
          <p className="underline font-bold cursor-pointer text-gray-700">
            Get Involved
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center bg-customGreen py-10">
          <SwipeCards data={campaignData?.scrolleble_section} />
      </section>
        
      <section className="bg-black/80 my-5 pt-10  text-gray-300 rounded-2xl">
        <div className="w-3/4 mx-auto">
          <h1 className="font-semibold text-xl mb-2">CSR Partnerships</h1>
          <span>At Hebron Foundation, we believe meaningful change begins with strong partnerships. As a CSR-registered and 80G-certified NGO, we collaborate with companies under the Companies Act, 2013, to create measurable community impact. 
          </span>
          
         
          <p className="my-5">Our initiatives span key CSR focus areas — Education, Health & Nutrition, Livelihood Development, and Child Welfare — with end-to-end execution and transparent reporting that turn every contribution into real, lasting change.          <span className="underline font-semibold cursor-pointer">Read more</span>
         </p>
          <span className="text-emerald-600 font-semibold">Write to us for CSR support</span>
          <p className="font-light">Reach us at- csrsupport@hebronfoundation.com</p>
        </div>
<h5 
  className="md:text-9xl text-5xl text-center text-gray-950/30 w-screen -ml-4 md:-ml-8 tracking-wider select-none"
  style={{ fontFamily: 'Nohemi' }}
>
  Hebron Foundation 
</h5>
      </section>

      <Footer />
    </MainLayout>
  );
}

export default Campaign_page;
