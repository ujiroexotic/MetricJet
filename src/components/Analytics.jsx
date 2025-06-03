import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold flex">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 flex">
            Manage Data Analyics Centrally
          </h1>
          {/* <p> Gain full visibility into your data operations with our centralized analytics dashboard. Monitor key metrics, track performance in
            real-time, and make informed decisions backed by data. Whether
            you're analyzing customer behavior or optimizing business processes,
            our platform brings everything together in one intuitive interface.
          </p> */}
          <section className="bg-[#f9fafb] text-gray-800 py-2 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-lg leading-relaxed">
      Gain full visibility into your data operations with our centralized analytics dashboard. Monitor key metrics, track performance in
      real-time, and make informed decisions backed by data. Whether you're analyzing customer behavior or optimizing business processes,
      our platform brings everything together in one intuitive interface.
    </p>
  </div>
</section>

          <button className="bg-black text-[#00df9a] w-[200px] flex justify-center rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
