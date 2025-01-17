import React from 'react';

const FrequentlyAskedQuestions = () => {
  return (
    <div className="bg-blue-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What prior knowledge is required for this course?</h3>
            <p className="text-gray-600">This is where you would place the answer to the frequently asked question.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How will this course help in my career as a product manager?</h3>
            <p className="text-gray-600">This is where you would place the answer to the frequently asked question.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What support do I get after completing the course?</h3>
            <p className="text-gray-600">This is where you would place the answer to the frequently asked question.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Are there any group discounts or scholarships available?</h3>
            <p className="text-gray-600">This is where you would place the answer to the frequently asked question.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How is this course delivered (live or recorded)?</h3><p className="text-gray-600">This is where you would place the answer to the frequently asked question.</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Still Have Questions?</h2>
          <p className="text-gray-600">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;