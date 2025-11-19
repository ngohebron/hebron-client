import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { FiChevronDown } from "react-icons/fi";
import { faqs, stories } from "../constants/data";

const Home = () => {
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <MainLayout className=" w-full">
      {/* Hero Section */}
      <section
        className="py-16  px-6 
         rounded-md
        bg-cover bg-center relative 
         before:absolute before:inset-0
    before:bg-linear-to-br
    before:from-[#FAF9F000] before:via-[#1F472680] before:to-[#0a1c0d80]
    overflow-hidden"
        style={{ backgroundImage: "url('/home/children.jpg')" }}
      >
        <div className=" relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="md:w-1/2 text-left">
              <h1 className="text-3xl text-white/80 font-semibold mb-4">
                One meal, one book, one
                <br />
                smile at a time.
              </h1>

              <p className="text-xl font-light text-white/80">
                We're on a mission to bring food, clothing, and education
                <br />
                to children who have been denied life's simplest needs <br />
                one meal, one book, one smile at a time.
              </p>
            </div>

            <button
              onClick={(e) => e.preventDefault()}
              className="bg-white text-emerald-900 hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className=" py-16 mx-1 px-6 rounded-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col  gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl  text-customGreen mb-4">
                We're <span className="font-semibold">Hebron Foundation</span>{" "}
              </h2>
              <h3 className="text-xl font-semibold text-customGreen mb-2">
                Our Aim
              </h3>
              <p className="text-xl font-light  text-customGreen">
                At Hebron, we envision a society where basic needs like food,
                clothing, and education are accessible to all, promoting dignity
                and empowerment.
              </p>
            </div>

            <button
              onClick={(e) => e.preventDefault()}
              className="bg-customGreen text-gray-200  px-3 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 px-6 bgCustomBlack rounded-2xl mx-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-gray-100  font-semibold mb-6">
            Our Work
          </h2>

          <div className="bgCustomBlack2 p-5 rounded-2xl">
            <div className="mb-10 ">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Our Campaigns
              </h3>
              <p className="mb-6  text-gray-200">
                The heart of our mission lies in these four ongoing campaigns —
                each addressing a vital need within our communities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Our Commitment
              </h3>
              <p className="mb-6 text-gray-200">
                Beyond our core campaigns, our team steps forward wherever
                communities need urgent support. These efforts may not happen
                every day, but they reflect our commitment to stand by those in
                need — always.
              </p>
              <div className="flex items-center w-full justify-center">
                <img
                  src="/home/child.jpg"
                  alt="Our Work"
                  width={500}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex py-5 items-center justify-center m">
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-gray-200 text-gray-800  px-3 py-2 w-fit rounded-3xl  font-medium shadow-xs  cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className=" relative md:w-3/4 w-1/2 flex items-center justify-center h-160 mx-auto my-5 rounded-3xl overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 flex item-center justify-center">
          <img
            src="/home/child2.jpg"
            alt="Child"
            width={800}
            className="object-cover h-200 "
          />
        </div>

        {/* Emerald Overlay */}
        <div className="absolute inset-0 bg-emerald-900/50 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative text-white py-10 px-2 grid grid-cols-1 md:grid-cols-1 md:gap-8 gap-2">
          <div class="text-center">
            <h2 className="text-2xl font-bold text-emerald-300">35%</h2>
            <p className="text-sm mt-1">
              of children under 5 in rural India are stunted due to chronic
              under-nutrition.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-300">1 in 6</h2>
            <p className="text-sm mt-1">
              rural households in India still lack a toilet.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-300">46%</h2>
            <p className="text-sm mt-1">
              of Class 8 students in rural India can perform basic arithmetic.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-300">25.7%</h2>
            <p className="text-sm mt-1">
              Rural poverty has fallen from ~25.7% in 2011-12 to ~4.86% in
              2023-24.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-300">80%</h2>
            <p className="text-sm mt-1">
              of rural homes have no formal system for household solid-waste
              collection.
            </p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="w-full flex justify-center items-center py-10 px-4">
        <div className="flex gap-4 w-full max-w-6xl justify-center h-auto overflow-x-auto md:overflow-visible">
          {stories.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(0)}
              className={`relative bg-emerald-900 text-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shadow-xl 
          ${
            active === index
              ? "w-full md:w-[60%] h-[450px] md:h-[450px]"
              : "w-[80px] h-[450px] md:h-[450px]"
          }`}
            >
              {/* Vertical Title for collapsed state */}
              <div
                className={`absolute inset-0 flex justify-center items-center text-lg font-medium whitespace-nowrap transition-opacity duration-300
            ${active === index ? "opacity-0" : "opacity-100 -rotate-90"}`}
              >
                {item.title}
              </div>

              {/* Expanded Content */}
              <div
                className={`w-full h-full p-4 md:p-5 transition-opacity duration-500 flex flex-col
            ${active === index ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-24 md:h-32 object-cover rounded-lg mb-3"
                />

                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-xs md:text-sm opacity-90 mb-3 overflow-y-auto flex-1">
                  {item.desc}
                </p>

                <button className="text-emerald-900 bg-white font-medium px-4 py-1 rounded-lg hover:bg-emerald-200 transition text-sm md:text-base w-fit">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-8 px-6 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-emerald-800 font-semibold  text-start">
            Get Involved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-white to-[#9aeaba] p-6 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] text-center transition-transform duration-300 hover:-translate-y-2">
              <h3 className="font-semibold text-lg mb-3 text-[#062b23]">
                Volunteer with us
              </h3>
              <p className="mb-4 text-gray-700">
                Join our volunteer team and experience the joy of creating real
                impact one act of kindness at a time.
              </p>
              <a
                href="#!"
                className="text-[#0a5c43] font-medium hover:underline"
              >
                Sign up to volunteer →
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-white to-[#9aeaba] p-6 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] text-center transition-transform duration-300 hover:-translate-y-2">
              <h3 className="font-semibold text-lg mb-3 text-[#062b23]">
                Donate in Kind
              </h3>
              <p className="mb-4 text-gray-700">
                Clothes, books, toys, or food—your simple contribution can bring
                comfort and hope to someone in need.
              </p>
              <a
                href="#!"
                className="text-[#0a5c43] font-medium hover:underline"
              >
                See what you can donate →
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-white to-[#9aeaba] p-6 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] text-center transition-transform duration-300 hover:-translate-y-2">
              <h3 className="font-semibold text-lg mb-3 text-[#062b23]">
                Donate in Cash
              </h3>
              <p className="mb-4 text-gray-700">
                Every rupee counts. Choose a one-time gift or become a monthly
                donor to help us sustain our life-changing programs.
              </p>
              <a
                href="#!"
                className="text-[#0a5c43] font-medium hover:underline"
              >
                Donate Now →
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-b from-white to-[#9aeaba] p-6 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] text-center transition-transform duration-300 hover:-translate-y-2">
              <h3 className="font-semibold text-lg mb-3 text-[#062b23]">
                CSR Partnerships
              </h3>
              <p className="mb-4 text-gray-700">
                Join hands with us through CSR initiatives that create
                measurable community impact. Together, let's build a future
                rooted in compassion.
              </p>
              <a
                href="#!"
                className="text-[#0a5c43] font-medium hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-4 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex md:flex-row gap-12 w-full">
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-emerald-800 mb-6">
                Get in Touch
              </h2>

              <div className="flex flex-col md:flex-row md:justify-between gap-10 w-full">
                {/* Left Column */}
                <div className="md:w-1/2">
                  <p className="text-md text-gray-600 mb-4">
                    Get in touch with us for any enquiries and questions
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex  flex-col gap-10 md:text-right md:w-1/2">
                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-2 underline">
                      General Enquiries & Partnerships
                    </h3>
                    <p className="mb-2 text-emerald-900">
                      info@hebronfoundation@gmail.com
                    </p>

                    <p className="text-emerald-900">+91-8793235622</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-700 underline">
                      CSR Support
                    </h3>
                    <p className="mb-2 text-emerald-900">
                      csrsupport@hebronfoundation@gmail.com
                    </p>
                    <p className="text-emerald-900">+91-8793235622</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form and Image */}
          <div className="flex w-full items-center justify-center mt-10 border-2 rounded-2xl border-emerald-800">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT — FORM */}
              <div className="flex flex-col justify-center p-4 ">
                <h3 className="text-xl text-gray-700 font-semibold mb-2">
                  Leave us a message
                </h3>
                <p className="mb-6 text-gray-600">
                  Drop any queries you have, we'll reach you
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700  font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Type your message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Enter your message for us"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-emerald-800 text-white px-6 py-2 rounded-lg hover:bg-emerald-900 transition cursor-pointer w-full"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="hidden md:flex w-full h-full items-center justify-center">
                <img
                  src="/home/contact.jpg"
                  alt="Contact"
                  className="w-full h-full object-cover rounded-r-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="my-5 max-w-6xl mx-auto border-2 border-emerald-700 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-4">
              {faqs.map((item, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full bg-emerald-800 text-white px-5 py-4 rounded-lg flex justify-between items-center shadow transition hover:bg-emerald-800"
                  >
                    <span className="text-left font-medium">{item.q}</span>
                    <FiChevronDown
                      className={`text-xl transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 bg-white text-gray-700 rounded-lg ${
                      openIndex === index ? "max-h-40 p-4 mt-1" : "max-h-0"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              <div class="w-2/4 h-[4px] bg-gradient-to-r from-emerald-700 to-emerald-900 mb-2"></div>

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
    </MainLayout>
  );
};

export default Home;
