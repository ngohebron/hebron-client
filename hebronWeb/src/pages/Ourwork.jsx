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
            className="w-full h-150 object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>
      {/* OurWork Grid */}
      <section className="py-16 px-6 bgCustomBlack rounded-2xl ">
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

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © 2023 Holstein Foundation, All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300">
                Tourist Services
              </a>
              <a href="#" className="hover:text-blue-300">
                Primary Policy
              </a>
              <a href="#" className="hover:text-blue-300">
                Legal Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}

export default Ourwork;
