import React from "react";
import MainLayout from "../layout/MainLayout";
import { ADDRESS, NGO_Details } from "../constants/data";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function GetInvolved() {
    const navigate = useNavigate();
  const campaignsData = [
    {
      id: "tab1",
      title: "Donate in Kind",
      heading: "Be part of the change.",
      description:
        "Donate clothes, food, books, or learning materials. Each contribution supports families, children, and communities struggling for daily essentials. We ensure every item you donate reaches those who need it most — with transparency and care.",
      helpText: "You can drop off your donations at our NGO.",
    },
    {
      id: "tab2",
      title: "Donate in Cash",
      heading: "",
      description:
        "Your financial support directly powers our programs in education, food distribution, and child welfare. You can choose to donate one time or become a monthly donor.",
      helpText: "Sponsor a Child’s Education.",
    },
    {
      id: "tab3",
      title: "Volunteer",
      heading: "",
      description:
        "Whether you have a few hours a week or just one day to spare, your time can change lives. Join our volunteer network to help organize donation drives, mentor children, or support on-ground initiatives.",
      helpText: "",
    },
    {
      id: "tab4",
      title: "CSR Partnership",
      heading: "",
      description:
        "Hebron Foundation is CSR-registered and 80G certified, making your support both impactful and compliant. Partner with us to implement end-to-end CSR projects — from on-ground execution to transparent reporting.",
      helpText: "",
    },
  ];
  const [activeTab, setActiveTab] = React.useState("tab1");
const FULL_ADDRESS = `${ADDRESS.line1}, ${ADDRESS.city} - ${ADDRESS.pincode}, ${ADDRESS.state}`;
 const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(FULL_ADDRESS);
    alert("Address copied!");
  } catch (err) {
    console.error("Failed to copy text", err);
  }
};
const openInGoogleMaps = (lat, lng) => {
  const url = `https://www.google.com/maps/place/${lat},${lng}`;
  window.open(url, "_blank");
};
const sendEmail = () => {
  window.location.href = `mailto:${NGO_Details.email}`;
};
  return (
    <MainLayout className="w-full h-screen flex justify-center items-center">
      <div className="p-4 rounded mx-10">
        <div className="w-full">
          <img
            src="/campaign/image1.jpg"
            alt="image1"
            className="w-full h-100 object-cover rounded-4xl shadow-md"
          />
        </div>

        <div className="mt-4 mx-2">
          <h1 className="font-medium text-[20px] leading-[116%] tracking-[0%] uppercase underline decoration-solid decoration-[5.5%] underline-offset-[8.5%]">
            Get Involved
          </h1>
          <h1 className="mt-5">Learn How you can contribute</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20  mt-6">
            <div className="flex flex-col">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                {campaignsData.map((campaign) => (
                  <button
                    key={campaign.id}
                    onClick={() => setActiveTab(campaign.id)}
                    className={`pb-3 font-semibold transition cursor-pointer ${
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
                {campaignsData.map((campaign) =>
                  activeTab === campaign.id ? (
                    <div>
                      {campaign.id === "tab1" && (
                        <div>
                          <button
                            key={campaign.id}
                            className="bg-[#234639] text-sm text-white hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
                            onClick={handleCopy}
                          >
                            Copy Address
                          </button>
                          <button
                            key={campaign.id}
                            className="text-sm text-black hover:bg-emerald-900 hover:text-gray-200 rounded-[22px] border opacity-100 gap-2 px-[15px] py-[5px] mx-5"
                           onClick={() => openInGoogleMaps(ADDRESS.coordinates.lat,ADDRESS.coordinates.lng)}
                          >
                            Open in Google Map
                          </button>
                        </div>
                      )}
                      {campaign.id === "tab2" && (
                        <div>
                          <button
                            key={campaign.id}
                            className="bg-[#234639] text-sm text-white hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
                          onClick={()=>navigate("/donationhub")}
                         >
                            Support the cause
                          </button>
                        </div>
                      )}
                      {campaign.id === "tab3" && (
                        <div>
                          <button
                            key={campaign.id}
                            className="bg-[#234639] text-sm text-white hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
                            onClick={sendEmail}
                         >
                            Write to us to Volunteer
                          </button>
                        </div>
                      )}
                      {campaign.id === "tab4" && (
                        <div>
                          <button
                            key={campaign.id}
                            className="bg-[#234639] text-sm text-white hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer"
                            onClick={handleCopy}
                         >
                            Write to us for CSR support
                          </button>
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </MainLayout>
  );
}

export default GetInvolved;
