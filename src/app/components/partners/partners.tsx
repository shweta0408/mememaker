import React from 'react';

function Partners() {
  return (
    <div
      className="flex flex-col items-center justify-evenly mt-10 mb-20"
      id="Partner"
    >
      <div className="flex flex-col  items-center justify-evenly bg-gradient-to-b from-yellow-400 to-amber-600 rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full p-6">
        {/* Left Section for Content */}
        <h2 className="text-4xl font-bold mb-20 text-white">Partners</h2>
        <div className="w-full flex flex-row justify-evenly mb-10">
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-125 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img
              src="pancakeswap.png"
              alt="Pancakeswap"
              className="w-48 h-auto"
            />
          </button>
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-125 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img src="bscscan.png" alt="bscscan" className="w-48 h-auto" />
          </button>{' '}
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-125 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img src="gecko.png" alt="gecko" className="w-48 h-auto" />
          </button>{' '}
          <button className="flex items-center bg-transparent hover:bg-amber-600 transform hover:scale-125 transition duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            <img src="./cmc.svg" alt="gecko" className="w-48 h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partners;