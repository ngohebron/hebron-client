import React from "react";
import MainLayout from "../layout/MainLayout";

const AboutUs = () => {
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
      {/* <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Holstein Foundation: a nonprofit organization that helps create
            social integration and innovation in 2010. The Organization's
            National Daycare Forum
          </h2>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg mb-6">
              Since 2014, our alumni have to address social challenges, global
              fundraising and cross-platform development by providing essential
              tools such as delivery of fitness in need.
            </p>
            <p className="text-lg">
              The total annual commitment taking prompt events, and revenue
              combination for long-term growth.
            </p>
          </div>
        </div>
        <div>
            <img src="/aboutus/child.jpg" alt="" />
        </div>
      </section> */}
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

      {/* Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Mr Benjamin Kane",
              "Mrs Benjamin Kane",
              "Mrs Timothy Kane",
              "Mrs Josephson Kane",
              "Ms Stephen Kane",
              "Ms Matthew Kane",
              "Ms James Kane",
              "Ms Jonathan Kane",
              "Ms Jennifer Kane",
              "Ms Susan Kane",
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {member.split(" ")[1].charAt(0)}
                  </span>
                </div>
                <p className="font-medium">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Helproom Foundation</h2>
              <p className="font-semibold mb-2">PARTYBLOGY</p>
              <p className="mb-4">
                John B.E. (Lincolnshire), New York
                <br />
                Current Business School
              </p>
              <p className="font-semibold">Phone + 8005 5468/8889</p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">
                Trust that Walks Beside You
              </h3>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-8">
                Contact Us here
              </button>

              <div className="space-y-2">
                <p className="font-semibold">Contact us at TATTERNS2</p>
                <p>Email: info@helproomfoundation.org.au</p>
                <p>Address: www.tattyhome.com</p>
                <p>Website: www.tattyhome.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
};

export default AboutUs;
