import React,  { useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../component/Footer";
import { images,teamMembers } from "../constants/data";


const AboutUs = () => {

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("next"); 

  const next = () => {
    setDirection("next");
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection("prev");
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <MainLayout className=" w-full">
      <section className="py-16  px-10">
        <div className="flex flex-col md:flex-row items-center  justify-center md:mx-0 mx-15  mb-2">
          {/* Left Section */}
          <div className="">
            <h1 className="text-4xl md:text-6xl font-medium mb-8 text-emerald-900 text-center">
              Turning Hope Into <br /> Everyday Reality.
            </h1>
          </div>

          {/* Right Section */}
          <div className=" mx-10 ml-auto">
            <p className="text-xl text-emerald-900 text-center">
              At <label className="font-semibold">Hebron Foundation</label> , we
              envision a society <br /> where basic needs like food, clothing,
              and <br /> education are accessible to all, promoting <br />{" "}
              dignity and empowerment.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full justify-center mt-5">
          <img
            src="/aboutus/p1.jpg"
            alt="image1"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className=" p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-600">
                Our Goal
              </h3>
              <p className="text-gray-700 text-lg">
                Advocate trumpet by providing a nutritional and rewarding
                daytime journey to the world. Governance is always committed to
                achieving a positive and welcoming school in Australia.
              </p>
            </div>

            <div className=" p-6 rounded-lg text-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To uplift communities by promoting food, clothing & education
                needed to be healthy, food & opportunity for all.
              </p>
            </div>

            <div className=" p-6 rounded-lg ">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                We envision a world where everyone has access to food, clothing
                and education – fostering dignity, empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization History */}
      <section className="py-8 px-6 bg-emerald-800 rounded-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 text-gray-100">
          {/* LEFT SIDE TEXT */}
          <div className="md:w-1/2">
            <h2 className="text-lg  mb-8">
              <span className="font-bold text-2xl">Hebron Foundation</span> : a
              nonprofit organization that helps create social integration and
              innovation in 2010. The Organization's National Daycare Forum
            </h2>

            <div className="  rounded-lg">
              <p className="text-lg mb-6">
                Since 2010, our aim has been to address social challenges,
                uphold human dignity, and foster sustainable development by
                providing essentials like food and clothing to those in need.
                The trust works to enhance well-being, promote equality, and
                empower communities for long-term growth.
              </p>
              <p className="text-lg">
                The total annual commitment taking prompt events, and revenue
                combination for long-term growth.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/aboutus/child.jpg"
              alt="about child"
              className="rounded-lg w-full object-cover max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 w-full text-white flex flex-col  items-center justify-center">
        <div className="bg-emerald-800 p-8 flex flex-col w-fit items-center justify-center gap-8 rounded-lg">
          <div className="mx-auto">
            <img
              src="/aboutus/unity.jpg"
              alt="unity"
              width={450}
              className="rounded-xl"
            />
          </div>
          <div className="max-w-2xl mx-auto bg-gray-200 rounded-2xl p-6 text-left">
  <blockquote className="text-2xl mb-6 text-emerald-800">
    “Hebron” means unity and friendship—values that can only thrive on trust.
  </blockquote>

  <blockquote className="px-2 text-gray-600 mb-6">
    Every contribution you make turns into real change — a meal shared, a child supported,
    a life uplifted. We believe in compassion backed by accountability, ensuring every act of giving
    truly reaches those who need it most.
    <br /><br />
    At Hebron Foundation, we value your trust as much as your contribution, using every donation
    responsibly and transparently to create lasting impact in the lives we serve.
  </blockquote>

  <button className="text-emerald-800  py-3 rounded-lg font-semibold hover:text-gray-700 transition cursor-pointer">
    Read about our Good Governance
  </button>
</div>

        </div>

      </section>

      {/* Image section */}

        {/* <section className="w-full flex flex-col items-center py-10">

      <div className="relative w-full max-w-5xl flex items-center justify-center">

       
        <img
          src={images[(active - 1 + images.length) % images.length]}
          alt=""
          className="w-[20%] h-[250px] object-cover rounded-3xl opacity-60 scale-90 hidden md:block"
        />

        
        <img
          src={images[active]}
          alt=""
          className="w-[65%] h-[350px] object-cover rounded-3xl shadow-xl z-10"
        />

     
        <img
          src={images[(active + 1) % images.length]}
          alt=""
          className="w-[20%] h-[250px] object-cover rounded-3xl opacity-60 scale-90 hidden md:block"
        />

       
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
        >
          <FaChevronLeft className="text-gray-700" size={18} />
        </button>

    
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
        >
          <FaChevronRight className="text-gray-700" size={18} />
        </button>
      </div>

      
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full ${
              i === active ? "bg-purple-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section> */}

    <section className="w-full flex flex-col items-center py-10">

  <div className="relative w-full max-w-5xl flex items-center justify-center">

    {/* LEFT IMAGE */}
    <img
      src={images[(active - 1 + images.length) % images.length]}
      alt=""
      className="w-[20%] h-[250px] object-cover rounded-3xl opacity-60 scale-90 hidden md:block 
                 smooth-slide"
    />

    {/* MAIN IMAGE */}
    <img
      key={active}
      src={images[active]}
      alt=""
      className="w-[65%] h-[350px] object-cover rounded-3xl shadow-xl z-10 
                 smooth-slide-main"
    />

    {/* RIGHT IMAGE */}
    <img
      src={images[(active + 1) % images.length]}
      alt=""
      className="w-[20%] h-[250px] object-cover rounded-3xl opacity-60 scale-90 hidden md:block 
                 smooth-slide"
    />

    {/* LEFT BUTTON */}
    <button
      onClick={prev}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
    >
      <FaChevronLeft className="text-gray-700" size={18} />
    </button>

    {/* RIGHT BUTTON */}
    <button
      onClick={next}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
    >
      <FaChevronRight className="text-gray-700" size={18} />
    </button>
  </div>

  {/* DOTS */}
  <div className="flex gap-2 mt-4">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => setActive(i)}
        className={`w-3 h-3 rounded-full ${
          i === active ? "bg-emerald-800" : "bg-gray-400"
        }`}
      />
    ))}
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

         

         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="rounded-2xl overflow-hidden w-55  h-fit shadow-lg"
    >
      <div className="relative w-full h-60 ">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-2xl "
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c7755a6] to-[#136341]"></div>
      </div>

      <div className="p-2 w-full text-center bg-[#136341] text-white">
        <p className="text-lg font-semibold">{member.name}</p>
        <p className="text-sm opacity-80">{member.role}</p>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Contact Information */}
      <Footer/>
    </MainLayout>
  );
};

export default AboutUs;
