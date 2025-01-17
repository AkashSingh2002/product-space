import React from "react";

const PartnershipSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Trusted by Students from
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src="https://via.placeholder.com/150" // Replace with IIT Kharagpur logo URL
            alt="IIT Kharagpur"
            className="h-16"
          />
          <img
            src="https://via.placeholder.com/150" // Replace with IIM Bangalore logo URL
            alt="IIM Bangalore"
            className="h-16"
          />
          <img
            src="https://via.placeholder.com/150" // Replace with IIT Roorkee logo URL
            alt="IIT Roorkee"
            className="h-16"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
