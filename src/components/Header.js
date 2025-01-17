import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      <div className="text-2xl font-bold text-blue-600">Product <span className="text-gray-800">Space</span></div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-800 hover:text-blue-600">Programs</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">Resources</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">Alumni</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
          Log in
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
