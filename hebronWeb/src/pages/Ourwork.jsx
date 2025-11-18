import React from "react";
import MainLayout from "../layout/MainLayout";

function Ourwork() {
  const campaignsitems = [
    {
      id: 1,
      image: "/ourwork/image1.jpg",
      title: "Education for All",
      desc: "Providing quality education to underprivileged children in rural communities.",
    },
    {
      id: 2,
      image: "/ourwork/image2.jpg",
      title: "Healthcare Initiative",
      desc: "Delivering essential healthcare services and medical camps to remote villages.",
    },
    {
      id: 3,
      image: "/ourwork/image1.jpg",
      title: "Clean Water Project",
      desc: "Installing safe drinking water systems to improve community health.",
    },
    {
      id: 4,
      image: "/ourwork/image2.jpg",
      title: "Skill Development",
      desc: "Training youth with vocational skills for sustainable employment.",
    },
    {
      id: 5,
      image: "/ourwork/image1.jpg",
      title: "Women Empowerment",
      desc: "Supporting women through education, microfinance, and leadership programs.",
    },
    {
      id: 6,
      image: "/ourwork/image1.jpg",
      title: "Environmental Conservation",
      desc: "Protecting ecosystems through reforestation and sustainable practices.",
    },
    {
      id: 7,
      image: "/ourwork/image2.jpg",
      title: "Child Protection",
      desc: "Safeguarding vulnerable children and providing rehabilitation support.",
    },
    {
      id: 8,
      image: "/ourwork/image1.jpg",
      title: "Agricultural Support",
      desc: "Empowering farmers with modern techniques and sustainable farming practices.",
    },
    {
      id: 9,
      image: "/ourwork/image2.jpg",
      title: "Disaster Relief",
      desc: "Providing immediate aid and rehabilitation in disaster-affected communities.",
    },
  ];

  const commitment = [
    {
      id: 1,
      image: "/ourwork/image1.jpg",
      title: "Education for All",
      desc: "Providing quality education to underprivileged children in rural communities.",
    },
    {
      id: 2,
      image: "/ourwork/image2.jpg",
      title: "Healthcare Initiative",
      desc: "Delivering essential healthcare services and medical camps to remote villages.",
    },
    {
      id: 3,
      image: "/ourwork/image1.jpg",
      title: "Clean Water Project",
      desc: "Installing safe drinking water systems to improve community health.",
    },
    {
      id: 4,
      image: "/ourwork/image2.jpg",
      title: "Skill Development",
      desc: "Training youth with vocational skills for sustainable employment.",
    },
    {
      id: 5,
      image: "/ourwork/image1.jpg",
      title: "Women Empowerment",
      desc: "Supporting women through education, microfinance, and leadership programs.",
    },
  ];
  return (
    <MainLayout className=" w-full">
      <section className="w-full py-12 px-0">
        <div className="w-full">
          <img
            src="/ourwork/image1.jpg"
            alt="image1"
            className="w-full h-150 object-cover rounded-4xl shadow-md"
          />
        </div>
      </section>
      {/* OurWork Grid */}
      <section className="py-16 px-6 bgCustomBlack rounded-4xl ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-gray-100  font-semibold mb-6">
            Our Work
          </h2>

          <div className="mb-10 ">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">
              Our Campaigns
            </h3>
            <p className="mb-6  text-gray-200">
              Get in touch with us for any enquiriesand questions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {campaignsitems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-[#234639] font-manrope font-semibold">
                    {item.title}
                  </h3>
                  <h2 className="text-sm text-[#43846D] mt-2">Our Goal</h2>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-10 mt-16">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">
              Our Commitment
            </h3>
            <p className="mb-6 text-gray-200">
              Get in touch with us for any enquiries, and questions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {commitment.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-[#234639] font-manrope font-semibold">
                      {item.title}
                    </h3>
                    <h2 className="text-sm text-[#43846D] mt-2">Our Goal</h2>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support and Involved Buttons */}
      <div className="my-16 flex justify-center items-center gap-4">
        <button
          onClick={(e) => e.preventDefault()}
          className="bg-[#234639] text-sm text-white hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
        >
          Support the causes
        </button>

        <span
          onClick={(e) => e.preventDefault()}
          className="text-[#234639] font-medium underline underline-offset-4 cursor-pointer hover:text-emerald-900 transition"
        >
          Get Involved
        </span>
      </div>

      <section className="py-16 px-6 bgCustomBlack rounded-4xl ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-gray-100  font-semibold mb-6">
            CSR Partnerships
          </h2>

          <p className="text-xl font-light text-white/80">
            At Hebron Foundation, we believe meaningful change begins with
            strong partnerships. <span className="font-bold text-white">As a CSR-registered and 80G-certified NGO</span>, we
            collaborate with companies under the Companies Act, 2013, to create
            measurable community impact.
          </p>

          <p className="text-xl font-light text-white/80 mt-6">
            Our initiatives span key CSR focus areas — Education, Health &
            Nutrition, Livelihood Development, and Child Welfare — with
            end-to-end execution and transparent reporting that turn every
            contribution into real, lasting change.
          </p>

          <span
            onClick={(e) => e.preventDefault()}
            className="text-white font-medium underline underline-offset-4 cursor-pointer hover:text-emerald-900 transition"
          >
            READ MORE
          </span>
          <h1 className="text-2xl text-[#7AA797] font-light mt-10">Write to us for CSR support</h1>
          <p className="text-white">Reach us at- <span className="underline underline-offset-4">csrsupport@hebronfoundation.com</span></p>
        </div>
      </section>

         {/*footer section */}
        <footer className="py-16 px-6 bg-[#F9F9EE] rounded-4xl mt-16">
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
                  Contact us:{" "}
                  <span className="text-emerald-800">8793235622</span>
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
  ">
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
                  <span className="text-6xl font-semibold text-emerald-900/50">Hebron Foundation</span>

                  </div>

              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Hebron Foundation. All rights reserved.
              </p>
              <div className="flex space-x-6 ">
                <a
                  href="#!"
                  className="text-emerald-900 hover:text-black"
                >
                  Terms of Service
                </a>
                <a
                  href="#!"
                  className="text-emerald-900 hover:text-black"
                >
                  Privacy Policy
                </a>
                <a
                  href="#!"
                  className="text-emerald-900 hover:text-black"
                >
                  Legal & Compliance
                </a>
              </div>
            </div>
          </div>
        </footer>
      
    </MainLayout>
  );
}

export default Ourwork;
