import React from 'react';

function Div() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Placed across 310+ Product Companies in India</h1>
          <p className="text-gray-600 mb-6">
            Our Alums have been placed across various established firms well known
            around the world.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Kickstart Your Journey
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-12">
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="https://www.adda247.com/images/logo.svg" alt="Adda247" className="h-16 w-16" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Adda247</h3>
          </div>
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="https://www.spyne.com/images/spyne-logo-white.svg" alt="Spyne" className="h-16 w-16" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Spyne</h3>
          </div>
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="https://www.swiggy.com/static/images/swiggy-logo-dark-background.png" alt="Swiggy" className="h-16 w-16" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4"> Swiggy</h3>
          </div>
          <div className="bg-white rounded shadow p-6 text-center">
            <img src="https://www.zomato.com/images/zomato_logo.png" alt="Zomato" className="h-16 w-16" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Zomato</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Div;