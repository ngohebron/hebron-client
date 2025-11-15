import React from 'react';
import MainLayout from '../layout/MainLayout';

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold">Hebron</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-600">Foundation</a>
          <a href="#" className="hover:text-blue-600">AboutUs</a>
          <a href="#" className="hover:text-blue-600">OurWork</a>
          <a href="#" className="hover:text-blue-600">GetInvolved</a>
          <a href="#" className="hover:text-blue-600">Event Gallery</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-blue-600">Login</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Support the cause
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  return (

    <MainLayout>
    <div >
     
      
      {/* Hero Section */}
      <section className="py-16 mx-1 px-6 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 rounded-md">
  <div className="max-w-6xl mx-auto">
    
    <div className="flex flex-col gap-12">
      <div className="md:w-1/2 text-left">
        
        <h1 className="text-3xl text-white/80 font-semibold mb-4">
          One meal, one book, one<br />smile at a time.
        </h1>

        <p className="text-xl font-light text-white/80">
          We're on a mission to bring food, clothing, and education<br />
          to children who have been denied life's simplest needs <br />
          one meal, one book, one smile at a time.
        </p>

      </div>

      <button className="bg-gray-200 text-emerald-900 hover:bg-emerald-900 hover:text-gray-200 transition px-4 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer">
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
              <h2 className="text-3xl  text-customGreen mb-4">We're <span className='font-semibold'>Hebron Foundation</span> </h2>
              <h3 className="text-xl font-semibold text-customGreen mb-2">Our Aim</h3>
              <p className="text-xl font-light  text-customGreen">
                At Hebron, we envision a society where basic needs like food, clothing, and education are accessible to all, 
                promoting dignity and empowerment.
              </p>
             
            </div>
      
              <button className='bg-customGreen text-gray-200  px-3 py-2 w-fit rounded-3xl font-medium shadow-xl cursor-pointer'>Learn more</button>
            
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Work</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Our Campaigns</h3>
            <p className="mb-6">
              The heart of our mission lies in these four ongoing campaigns — each addressing a vital need within our communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">1 Deserves a Sch...</h4>
                <p>Educational support campaign</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Bringing Health to Their Doo...</h4>
                <p>Healthcare access initiative</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="mb-6">
              Beyond our core campaigns, our team steps forward wherever communities need urgent support. 
              These efforts may not happen every day, but they reflect our commitment to stand by those in need — always.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">35.5%</div>
              <p className="text-sm">of children under 5 in India are stunted due to chronic under-nutrition.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">18%</div>
              <p className="text-sm">rural households in India still lack a toilet.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">44%</div>
              <p className="text-sm">of Class 8 students in rural India can perform basic arithmetic.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.86%</div>
              <p className="text-sm">Rural poverty has fallen from ~25.7% in 2011-12 to 4.86% in 2023-24.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">26%</div>
              <p className="text-sm">of rural homes have no formal system for household solid-waste collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">How we raised 34K</h2>
              <p className="mb-6">
                When rising prices left daily wage families struggling to afford food, our volunteers united 
                across districts to raise $34,000 in just 10 days — ensuring 200 families didn't go to bed hungry.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-lg mb-4">Volunteer with us</h3>
              <p className="mb-4">
                Join our volunteer team and experience the joy of creating real impact one act of kindness at a time.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Sign up to volunteer &gt;
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-lg mb-4">Donate in Kind</h3>
              <p className="mb-4">
                Clothes, books, toys, or food—your simple contribution can bring comfort and hope to someone in need.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                See what you can donate 人
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-lg mb-4">Donate in Cash</h3>
              <p className="mb-4">
                Every rupee counts. Choose a one-time gift or become a monthly donor to help us sustain our life-changing programs.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Donate Now &gt;
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-lg mb-4">CSR Partnerships</h3>
              <p className="mb-4">
                Join hands with us through CSR initiatives that create measurable community impact. Together, let's build a future rooted in compassion.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-2">General Enquiries & Partnerships</h3>
                <p className="mb-2">info@hebronfoundation@gmail.com</p>
                <p className="text-sm text-gray-600 mb-4">
                  Get in touch with us for any enquiries and questions
                </p>
                <p>+91-8793235622</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">CSR Support</h3>
                <p className="mb-2">csrsupport@hebronfoundation@gmail.com</p>
                <p>+91-8793235622</p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Leave us a message</h3>
              <p className="mb-6 text-gray-600">Drop any queries you have, we'll reach you</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Type your message</label>
                  <textarea 
                    placeholder="Enter your message for us" 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b pb-2">
                <p className="font-medium">Is your NGO registered and recognized by the government?</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Are my donations eligible for tax benefits?</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">How do you ensure my donation is used properly?</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Can I volunteer with your NGO?</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Do you accept corporate or CSR partnerships?</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Can I get updates on how my donation is making a difference?</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">How can I donate to support your work?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold mr-2">Hebron</h2>
                <span className="text-sm bg-blue-600 px-2 py-1 rounded">Foundation</span>
              </div>
              <p className="text-gray-300 mb-2">Trust that Walks Beside You</p>
              <p className="text-gray-300">
                H.No. B 23, Limbore Plot , Near Arun Cinema Theater, Dapodi,<br />
                Pune - 411012, Maharashtra
              </p>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-4">Support a cause</h3>
              <p className="text-gray-300 mb-1">Contact us: 8793235622</p>
              <p className="text-gray-300">Email: info@hebronfoundation@gmail.com</p>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-4 mb-4">
                <a href="#" className="hover:text-blue-300">AboutUs</a>
                <a href="#" className="hover:text-blue-300">WhatWeDo</a>
                <a href="#" className="hover:text-blue-300">DonateforaCause</a>
                <a href="#" className="hover:text-blue-300">EventGallery</a>
                <a href="#" className="hover:text-blue-300">ContactUs</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Hebron Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Legal & Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </MainLayout>
  );
};

export default Home;