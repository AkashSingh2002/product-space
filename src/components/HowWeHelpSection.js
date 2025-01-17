import React from "react";

const HowWeHelpSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="grid grid-cols-2 gap-8 md:w-1/2">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <img
                src="https://via.placeholder.com/50" // Replace with relevant icon URL
                alt="85% icon"
                className="h-10 w-10"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">85%</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <img
                src="https://via.placeholder.com/50" // Replace with relevant icon URL
                alt="80% icon"
                className="h-10 w-10"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">80%</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <img
                src="https://via.placeholder.com/50" // Replace with relevant icon URL
                alt="57 LPA icon"
                className="h-10 w-10"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">₹57 LPA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <img
                src="https://via.placeholder.com/50" // Replace with relevant icon URL
                alt="1000+ icon"
                className="h-10 w-10"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">1000+</p>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-2xl font-bold">We help you succeed in your career</h2>
          <p className="mt-4 text-gray-400">
            Our proven track record of transforming aspiring product managers
            into industry-leading professionals across top-tier tech companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
