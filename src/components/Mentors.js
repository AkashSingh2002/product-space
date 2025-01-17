import React from "react";

const Mentors = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-8">Our Mentors</h2>
        <div className="flex justify-center">
          <img
            src="/Mentors.png"
            alt="Mentors"
            className="w-full max-w-4xl rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Mentors;
