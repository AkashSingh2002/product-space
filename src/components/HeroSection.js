import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            Accelerate your Career
            <img 
    src="/carbon_growth.svg" 
    alt="Icon" 
    className="inline-block w-6 h-6 mx-2 align-middle"
  /><br /> in Product Management & AI
          </h1>
          <p className="text-gray-600">
            Learn from Industry experts from <span className="font-semibold">Google, Apple,<br /> Microsoft, Ola, Inmobi</span> and <span className="font-semibold">Ajio</span>
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Explore Programs
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 flex items-center space-x-2">
            <FaRegCirclePlay />
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="flex space-x-8 mt-8">
            {/* <div>
              <p className="text-2xl font-bold text-blue-600">4.8</p>
              <p className="text-gray-600">Ratings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-600">Learners</p>
            </div> */}
          </div> 
          <img src='/ratings.png' alt='ratings' />
        </div>
        {/* Right Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start relative mt-12 md:mt-0">
          {/* <div className="absolute top-0 left-16 text-sm bg-white shadow-md p-4 rounded-md">
            User Needs?
          </div>
          <div className="absolute top-24 left-32 text-sm bg-white shadow-md p-4 rounded-md">
            Design Principles?
          </div>
          <div className="absolute top-40 left-4 text-sm bg-white shadow-md p-4 rounded-md">
            Business Goals?
          </div>
          <div className="relative z-10">
            <img
              src="https://via.placeholder.com/150"
              alt="Woman thinking"
              className="rounded-md"
            />
          </div>
          <div className="relative z-20 mt-4 md:mt-0">
            <img
              src="https://via.placeholder.com/150"
              alt="Woman with laptop"
              className="rounded-md"
            />
            <p className="absolute -bottom-8 left-4 bg-yellow-400 px-4 py-2 rounded-md text-white">
              50+ LPA Median Salary
            </p>
          </div> */}
          <img src='/thinking.png' alt='thinking' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
