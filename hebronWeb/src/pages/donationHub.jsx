import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Footer from "../component/Footer";

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

const faqs = [
  {
    question: "How can I make a donation to Hebron Foundation?",
    answer:
      "You can donate securely through our website using UPI, debit/credit cards, or net banking. Every contribution, big or small, makes a difference.",
    open: false,
  },
  {
    question: "Will I get a receipt for my donation?",
    answer:
      "Yes. You'll receive an instant email receipt after your payment, confirming your donation.",
    open: false,
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "",
    open: false,
  },
  {
    question: "Can I donate items like clothes or books instead of money?",
    answer: "",
    open: false,
  },
  {
    question: "How safe is it to donate online?",
    answer:
      "Your safety and privacy matter to us. All transactions are processed through secure, encrypted payment gateways.",
    open: false,
  },
  {
    question: "Can I know how my donation is used?",
    answer: "",
    open: false,
  },
  {
    question: "Can I make a monthly or recurring donation?",
    answer: "",
    open: false,
  },
];

export default function DonationHub() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [openIds, setOpenIds] = useState(
    faqs.reduce((acc, faq, idx) => {
      if (faq.open) acc.push(idx);
      return acc;
    }, [])
  );

  const toggleOpen = (idx) => {
    setOpenIds((prev) =>
      prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx]
    );
  };

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
        <div className="md:w-1/2 text-left ml-10 mb-20">
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
   <section className="relative -mt-20 px-6 pb-16">
  <div className="max-w-6xl mx-auto bg-[#43846D] rounded-2xl shadow-lg p-8 md:p-12">

    {/* Center section wrapper */}
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full">

        {/* FAQ Title */}
        <h1 className="text-white text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h1>

        {/* FAQ Box */}
        <div className="bg-[#7AA79733] bg-opacity-70 rounded-xl p-8 shadow-lg">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-6">
              <button
                className="w-full text-left text-lg text-white"
                onClick={() => toggleOpen(idx)}
              >
                {faq.question}
                <span className="float-right">
                  {faq.answer ? (openIds.includes(idx) ? "−" : "+") : "+"}
                </span>
              </button>

              {/* Smooth Animation */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIds.includes(idx)
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-2 text-white text-[16px] pl-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

    {/* Contact Box - aligned with FAQ box */}
    <div className="w-full flex justify-center mt-6">
      <div className="max-w-xl w-full">
        <div
          className="
            w-full
            rounded-[9px]
            border-2
            opacity-100
            p-6
            bg-gradient-to-r from-[#43846D] via-[#234639] to-[#43846D]
          "
        >
          <h1 className="text-white text-sm mb-2">
            For any further queries reach out to
          </h1>

          <p className="text-white text-sm">
            Email : info@hebronfoundation.com
          </p>

          <p className="text-white text-sm mt-1">
            Contact: 8793235622
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

<div className="py-16 px-6 bg-[#F9F9EE] rounded-4xl mt-16">
    <Footer/>
</div>

    </MainLayout>
  );
}
