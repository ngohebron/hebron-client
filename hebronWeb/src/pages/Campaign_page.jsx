import React from "react";
import MainLayout from "../layout/MainLayout";

function Campaign_page() {
  return (
    <MainLayout className=" w-full">
      <section className="w-full py-12 px-0">
        <div className="w-full">
          <img
            src="/campaign/image1.jpg"
            alt="image1"
            className="w-full h-150 object-cover rounded-4xl shadow-md"
          />
        </div>
      </section>

      <div className="flex items-center justify-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-xl mb-4 leading-relaxed text-[#1B3F32]">
            What is <span className="font-bold">Meal of Hope </span>{" "}
            <span className="font-bold">?</span>
          </h1>
          <p className=" mb-6 text-[#1B3F32]">
            We distribute cooked meals at community centers, shelters, and
            schools to ensure that individuals have access to hot, nutritious
            food.
          </p>
        </div>
      </div>

      <div className="flex items-end justify-center py-12 px-6 gap-4">
        <div className="w-100 h-80">
          <h1 className="text-xl text-[#1B3F32] mb-6">Why ?</h1>

          <p className="text-[#1B3F32] mb-4">
            Millions across India still go to bed hungry every night.
            Malnutrition and lack of access to food not only affect physical
            health but also rob people of dignity and hope.
          </p>

          <p className="text-[#1B3F32] mb-4">
            At Hebron Foundation, we believe that a single meal can restore
            faith, renew energy, and reignite the will to move forward.
          </p>

          <p className="text-[#1B3F32]">
            Our Goal: To fight hunger, promote health, and bring dignity through
            every meal shared.
          </p>
        </div>

        <div>
          <img
            src="/ourwork/image1.jpg"
            alt="image1"
            className="w-100 h-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Campaign_page;
