import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";

const campaignsData = [
  {
    id: "tab1",
    title: "Food",
    description:
      "No one should have to sleep hungry. Yet, for many, a meal is a luxury. At Hebron, we believe a shared meal is more than food — it’s a gesture of friendship and care. When you give, you’re not just filling a plate; you’re restoring hope and dignity to someone’s day.",
    image: "/donationHub/image1.jpg",
  },
  {
    id: "tab2",
    title: "Education",
    description:
      "We deliver essential healthcare services through medical camps and clinics in remote areas. Our healthcare initiative ensures access to preventive care and treatment for all.",
    image: "/donationHub/image2.jpg",
  },
  {
    id: "tab3",
    title: "Clothing",
    description:
      "The livelihood program trains individuals with vocational skills to create sustainable income sources. We support microenterprises and self-employment opportunities.",
    image: "/donationHub/image3.jpg",
  },
  {
    id: "tab4",
    title: "Child Development",
    description:
      "Our environmental conservation efforts include reforestation, clean water projects, and sustainable agriculture practices. We protect ecosystems for future generations.",
    image: "/donationHub/image4.jpg",
  },
];

const causes = [
  {
    title: "Provide Nutritious Meal To Hungry Children",
    raised: 65000,
    goal: 100000,
  },
  {
    title: "Empower Youth Through Education",
    raised: 75000,
    goal: 100000,
  },
  {
    title: "Give Warmth And Dignity To Those In Need",
    raised: 80000,
    goal: 100000,
  },
  {
    title: "Help Every Child Grow, Learn, And Thrive",
    raised: 50000,
    goal: 100000,
  },
];

const items = [
  {
    icon: "/donationHub/temoicon.jpg",
    title: "Feeds the needy",
    description:
      "Every ₹30 serves a warm, wholesome meal and reminds someone they are not forgotten.",
  },
  {
    icon: "/donationHub/temoicon.jpg",
    title: "Supports education",
    description:
      "Books, bags, and dreams — your gift helps a child stay in school and keep learning.",
  },
  {
    icon: "/donationHub/temoicon.jpg",
    title: "Warmth to the Poor",
    description:
      "Bring comfort and confidence through clean, seasonal clothing to those in need.",
  },
  {
    icon: "/donationHub/temoicon.jpg",
    title: "Child Development",
    description:
      "Child Development Bring comfort & confidence through clean, seasonal clothing to those in need.",
  },
];

export default function DonationHub() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <MainLayout className=" w-full">
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
        <div className="md:w-1/2 text-left ml-10">
          <h1 className="text-3xl text-white/80 font-semibold mb-4 mt-100">
            Your Kindness can bring a{" "}
          </h1>
        </div>
      </section>

      {/* Overlapping Section */}
      <section className="relative -mt-20 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="inline-block">Our Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col">
                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-200">
                  {campaignsData.map((campaign) => (
                    <button
                      key={campaign.id}
                      onClick={() => setActiveTab(campaign.id)}
                      className={`pb-3 font-semibold transition ${
                        activeTab === campaign.id
                          ? "border-b-2 border-customGreen text-customGreen"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {campaign.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="text-gray-700 flex-grow">
                  {campaignsData.map(
                    (campaign) =>
                      activeTab === campaign.id && (
                        <div key={campaign.id}>
                          <p className="mb-6">{campaign.description}</p>
                        </div>
                      )
                  )}
                </div>

                {/* Button at Bottom */}
                <div className="mt-auto">
                  {campaignsData.map(
                    (campaign) =>
                      activeTab === campaign.id && (
                        <button
                          key={campaign.id}
                          className="bg-[#234639] text-sm text-white hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
                        >
                          Support the cause
                        </button>
                      )
                  )}
                </div>
              </div>
              <div>
                {campaignsData.map(
                  (campaign) =>
                    activeTab === campaign.id && (
                      <div key={campaign.id}>
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-80 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="relative mt-40 -mx-8 md:-mx-12 overflow-visible">
              <div className="flex gap-6 justify-center overflow-visible">
                <div className="w-72 h-80 flex-shrink-0 -ml-36">
                  <img
                    src="/donationHub/image1.jpg"
                    alt="Campaign 1"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="w-72 h-80 flex-shrink-0">
                  <img
                    src="/donationHub/image2.jpg"
                    alt="Campaign 2"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="w-72 h-80 flex-shrink-0">
                  <img
                    src="/donationHub/image3.jpg"
                    alt="Campaign 3"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="w-72 h-80 flex-shrink-0 -mr-36">
                  <img
                    src="/donationHub/image4.jpg"
                    alt="Campaign 4"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* Cards Section */}
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-2 gap-10 p-6 max-w-4xl">
                {causes.map((item, index) => {
                  const percent = (item.raised / item.goal) * 100;
                  return (
                    <div
                      key={index}
                      className="bg-[linear-gradient(90deg,#43846D_0%,#234639_50%,#43846D_100%)] rounded-2xl shadow-lg flex flex-col w-80 h-60 justify-between p-6"
                    >
                      <div className="bg-white w-full p-3 rounded-lg shadow">
                        <h2 className="text-sm font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h2>

                        <p className="text-xs text-gray-600 mb-1">
                          Fund Raised
                        </p>

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

                      <button className="bg-white text-customGreen font-semibold py-2 px-3 text-xs rounded-full shadow hover:bg-gray-100 transition">
                        Support
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full mt-8">
              {/* Centered Title */}
              <h1
                className="font-nohemi font-medium text-[34px] leading-[100%] tracking-[1%] 
                 text-center capitalize"
              >
                What your donation supports
              </h1>

              {/* Cards Grid */}
              <div className="mt-10 px-6 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className={`
            p-6 flex flex-col items-center text-center
            ${index === 3 ? "md:col-start-2" : ""}
          `}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-16 h-16 mb-4"
                      />

                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
