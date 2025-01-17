import React from 'react';

function Div() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Placed across 310+ Product Companies in India
          </h1>
          <p className="text-gray-600 mb-6">
            Our Alums have been placed across various established firms well known
            around the world.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Kickstart Your Journey
          </button>
        </div>
        
        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src="/div.png"  // Replace with your desired image
            alt="Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      
      
    </div>
  );
}

export default Div;
