import React from 'react';

function Testimonials() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-10">Real Success, Real Impact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13.022a2 2 0 01-2 2h-7a2 2 0 01-2-2v-12.5a2 2 0 012-2h7a2 2 0 012 2z" /></svg>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">spyne</h2>
            </div>
          </div>
          <p className="text-gray-600">The Product Space team for kills and knowledge I needed to gement. The practical zed support were especially</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://i.ibb.co/G9v7yKq/ayushi.jpg" alt="Ayushi Maurya" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Ay ushi Maurya</h2>
            </div>
          </div>
          <p className="text-gray-600">Product Executive, FirstCry. Product Space has been a game-changer for her career.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://i.ibb.co/G9v7yKq/pranay.jpg" alt="Gaddam Pranay" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Gaddam Pranay</h2>
            </div>
          </div>
          <p className="text-gray-600">APM, Truly Madly. He is deeply grateful to Product Space for the transformative mentorship.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://i.ibb.co/G9v7yKq/anushka.jpg" alt="Anushka Jain" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Anushka Jain</h2>
            </div>
          </div>
          <p className="text-gray-600">Investment Banking Analyst, Intern, JPMorgan Chase & Co. Product Space provided her with a transformative learning experience.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://i.ibb.co/G9v7yKq/nikhil.jpg" alt="Nikhil Karamchandani" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Nikhil Karamchandani</h2>
            </div>
          </div>
          <p className="text-gray-600">PM Intern, Zomato. The Product Space program was a great way to gain insights into product management.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://i.ibb.co/G9v7yKq/medhya.jpg" alt="Medhya Bucha" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Medhya Bucha</h2>
            </div>
          </div>
          <p className="text-gray-600">PM Consultant, Swiggy. Looking to transition into product management, she found Product Space to be the perfect program.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;