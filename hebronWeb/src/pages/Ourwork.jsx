import React from "react";
import MainLayout from "../layout/MainLayout";

function Ourwork() {
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
