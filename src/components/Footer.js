import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 mr-4">
            <img src="/logo.svg" alt="Product Space Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm">A Great Place to Upskill</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm font-bold mb-2">Resources</h3>
          <ul className="list-none text-sm">
            <li><a href="/" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="/" className="hover:underline">Privacy policy</a></li>
            <li><a href="/" className="hover:underline">Refund policy</a></li>
            <li><a href="/" className="hover:underline">Contact us</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm font-bold mb-2">Links</h3>
          <ul className="list-none text-sm">
            <li><a href="/" className="hover:underline">Testimonials</a></li>
            <li><a href="/" className="hover:underline">Events</a></li>
            <li><a href="/" className="hover:underline">Blogs</a></li>
            <li><a href="/" className="hover:underline">Become a Mentor</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500 mr-2"
          />
 <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;