import React from 'react';

function CaseStudies() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Learn from the Best
      </h1>
      <p className="text-center mb-8">
        Fast track your journey into product management and emerge into your dream
        role as PM
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 rounded-lg p-6">
          <img
            src="https://i.ibb.co/w4B9kY4/Kumar.jpg"
            alt="Kumar"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h2 className="text-lg font-bold text-center">Kumar</h2>
          <p className="text-sm text-center">Product</p>
        </div>
        <div className="bg-blue-500 rounded-lg p-6">
          <img
            src="https://i.ibb.co/V98B4F5/Pamit-Anand.jpg"
            alt="Pamit Anand"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h2 className="text-lg font-bold text-center">Pamit Anand</h2>
          <p className="text-sm text-center">
            Sr. VP & Head of Product (20+ years)
          </p>
        </div>
        <div className="bg-blue-500 rounded-lg p-6">
          <img
            src="https://i.ibb.co/T48kS9D/Shilpi.jpg"
            alt="Shilpi"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h2 className="text-lg font-bold text-center">Shilpi</h2>
          <p className="text-sm text-center">
            Sr . Product Manager (mentored 600+ students)
          </p>
        </div>
        <div className="bg-blue-500 rounded-lg p-6">
          <img
            src="https://i.ibb.co/4g3F5gD/Kanishk-Mehta.jpg"
            alt="Kanishk Mehta"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h2 className="text-lg font-bold text-center">Kanishk Mehta</h2>
          <p className="text-sm text-center">Director of Product, InMobi</p>
        </div>
        <div className="bg-blue-500 rounded-lg p-6">
          <img
            src="https://i.ibb.co/7g3F5gD/Arun-Nandewo.jpg"
            alt="Arun Nandewo"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h2 className="text-lg font-bold text-center">Arun Nandewo</h2>
          <p className="text-sm text-center">Sr. Product Manager (600+ students)</p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;