import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Footer from "../component/Footer";
import FlipCard from "../component/FlipCard";
import SlidingImage from "../component/SlidingImage";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createDonation, verifyPayment } from "../utils/donationApis";

const DonationFood = () => {
   const location = useLocation();
  const navigate = useNavigate();
   const item = location.state?.data;
    const [donationData, setDonationData] = useState(item || null);
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("One Time");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    panNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!donationAmount) {
      alert("Please enter donation amount");
      return;
    }

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      amount: Number(donationAmount),
      currency: "INR",
      message: "Keep up the good work",
      payment_gateway: "RAZORPAY",
      pancard_no: formData.panNumber,
    };
     console.log("Donation Payload:", payload);
    try {
      const res = await createDonation(payload);
      console.log("Create Donation Response:", res);
      // alert("Thank you for your donation!");
      if (res.data.success) {
        openRazerpay(res.data.data.razorpayOrder);
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to create donation");
    }
  };

  const handlePaymentVerification = async (paymentResponse) => {
    const verificationData = {
      razorpay_order_id: paymentResponse.razorpay_order_id,
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_signature: paymentResponse.razorpay_signature,
    };

    try {
      const res = await verifyPayment(verificationData);
      if (res.data.success) {
        alert("Payment verified successfully!");
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      alert("Error verifying payment");
    }
  };

  const openRazerpay = (paymentData) => {
    try {
      const { id: order_id, amount, currency, notes } = paymentData;
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your Razorpay Key
        amount: amount, // in paise
        currency: currency,
        name: "Helton Foundation",
        description: "Donation",
        order_id: order_id,
        handler: function (response) {
          console.log("Payment successful:", response);
          handlePaymentVerification(response);
          //alert("Payment Successful!");
          // You can call backend to verify payment here
        },
        prefill: {
          name: notes.donor_name,
          email: notes.donor_email,
          contact: notes.donor_phone,
        },
        notes: {
           pancard_no: notes.pancard_no,
      },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      alert("Failed to open payment gateway");
    }
  };


  useEffect(() => {
    console.log("donationdata--->",item.donationDetails)
  })

  return (
    <MainLayout>
      <section
        className="py-16  px-6 
         rounded-md
        bg-cover bg-center relative 
         before:absolute before:inset-0
    
     h-[450px]"
        style={{ backgroundImage: "url('/donationFood/donate-food.jpg')" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-end px-6">
          <h1
            className="text-3xl text-gray-100/60 font-medium"
            style={{ fontFamily: "Nohemi" }}
          >
            Your Kindness can
            <br />
            Bring a<span className="font-semibold"> change.</span>
          </h1>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="w-full md:w-3/4 py-6 md:py-8 px-4 md:px-10 mb-5 bg-gray-50 rounded-3xl shadow-lg -mt-10 relative z-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 mx-auto">
        <div className="w-full md:w-auto">
          <span></span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6 text-center md:text-left">
             {donationData?.donationDetails?.title}
          </h2>

          <p className="text-gray-700 font-semibold max-w-4xl text-sm md:text-base text-center md:text-left">
           {donationData?.donationDetails?.desc1}
          </p>

          <div className="my-4 md:my-6">
            <p className="text-sm md:text-base text-center md:text-left">
             {donationData?.donationDetails?.desc2}
            </p>
          </div>

         {donationData?.donationDetails?.desc3 && (
      <div className="max-w-4xl leading-relaxed mb-6 md:mb-10">
        <p className="text-sm md:text-base text-center md:text-left">
          {donationData?.donationDetails?.desc3}
        </p>
      </div>
    )}
        </div>

        <div className="w-full md:w-auto">
          {/* Donation Amount Options */}
          <div className="w-full max-w-2xl border-2 my-6 md:my-12   py-4 rounded-2xl shadow-2xl">
            <div className="flex   justify-center gap-3 md:gap-6 px-3 md:px-3 mb-3 md:mb-4">
              {[500, 1000, 1500, 2000].map((amount) => (
                <label
                  key={amount}
                  className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <input
                    type="radio"
                    name="donation"
                    value={amount}
                    onChange={() => setDonationAmount(amount.toString())}
                    className="w-4 h-4 accent-emerald-800"
                  />
                  <span className="text-gray-700 text-xs font-medium whitespace-nowrap">
                    ₹ {amount}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex flex-col w-full px-4 md:px-8 mb-4 md:mb-6">
              <label className="text-gray-600 text-sm my-1">
                Or enter other amount
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full px-3  py-1 md:py-1 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>

            {/* Donation Form */}
            <form
              className="w-full max-w-2xl rounded-xl px-4 md:px-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2 md:space-y-2">
                <div>
                  <label className="text-gray-600 text-sm my-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Type here"
                    className="w-full px-3  py-1 md:py-1 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm my-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="w-full px-3  py-1 md:py-1 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4 md:mb-6">
                  <label className="text-gray-600 text-sm my-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Type here"
                    className="w-full px-3  py-1 md:py-1 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm my-1">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    placeholder="Type here"
                    className="w-full px-3  py-1 md:py-1 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
                  {["One Time", "Monthly"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
                      onClick={() => setDonationType(type)}
                    >
                      <input
                        type="radio"
                        name="donationType"
                        value={type}
                        checked={donationType === type}
                        onChange={() => setDonationType(type)}
                        className="w-4 h-4 accent-emerald-900"
                      />
                      <span className={`text-sm font-medium text-gray-600`}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white py-1 md:py-1 rounded-4xl font-semibold text-md hover:bg-emerald-950 transition-colors duration-200 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 flex items-center justify-center  text-white">
        <FlipCard />
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 w-3/4">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-8">
            Our Events
          </h3>
          {/* Events content would go here */}
          <div className="text-gray-500 ">
            <SlidingImage />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full flex items-center justify-center py-15 text-white bg-cover bg-center bg-no-repeat "
        style={{ backgroundColor: "#484848" }}
      >
        <div className="w-3/4   px-4 ">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Want To Be Part Of This Change?
          </h3>
          <p className=" max-w-2xl  mb-8 ">
            Your support can turn compassion into action. Join us in making
            lives brighter — one step, one meal, one child at a time.
          </p>
          <button
            className="bg-white  px-4 py-2 rounded-4xl font-semibold text-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer mb-2"
            style={{ color: "#484848" }}
            onClick={() => navigate("/getinvolved")}
          >
            Get Involved
          </button>
          <div className="text-md">
            Reach us at:{" "}
            <a
              href="mailto:info@heltonfoundation.com"
              className="underline hover:no-underline"
            >
              info@heltonfoundation.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </MainLayout>
  );
};

export default DonationFood;
