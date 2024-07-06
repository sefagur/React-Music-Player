import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser, FaList, FaMicrophone, FaTimes } from 'react-icons/fa';

const Header = ({ toggleSidebar, toggleLoginModal }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#1c1b1b] to-[#232222] rounded-xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl border border-[#363535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              className="sm:hidden text-white mr-4 hover:text-[#f95d5d] transition-all duration-200 transform hover:scale-110" 
              onClick={toggleSidebar}
            >
              <FaList className="text-xl" />
            </button>
          </div>

          <div className="hidden sm:block flex-1 max-w-xl mx-8">
            <div className="relative group">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#f95d5d] transition-colors duration-200" />
              <input
                type="text"
                placeholder="Şarkı veya sanatçı arayın..."
                className="w-full bg-[#333333] border-none rounded-full py-2 pl-10 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f95d5d] transition-all duration-300 group-hover:bg-[#404040]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#f95d5d] transition-colors duration-200">
                <FaMicrophone className="text-lg" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gradient-to-r from-[#f95d5d] to-[#ff7b7b] text-white rounded-full hover:from-[#ff7b7b] hover:to-[#f95d5d] transition-all duration-300 hidden sm:block font-semibold text-sm whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105">
              Kanalım
            </button>
            <button className="relative p-2 hover:bg-[#333333] rounded-full transition-all duration-200 group">
              <FaBell className="text-xl text-white group-hover:text-[#f95d5d] transition-colors duration-200" />
              <span className="absolute -top-1 -right-1 bg-[#f95d5d] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center group-hover:animate-pulse">3</span>
            </button>
            <button onClick={toggleLoginModal} className="p-2 hover:bg-[#333333] rounded-full transition-all duration-200 group">
              <FaUser className="text-xl text-white group-hover:text-[#f95d5d] transition-colors duration-200" />
            </button>
            <button 
              className="sm:hidden p-2 hover:bg-[#333333] rounded-full transition-all duration-200" 
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <FaTimes className="text-white text-xl" /> : <FaSearch className="text-white text-xl" />}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="sm:hidden py-4">
            <div className="relative group">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#f95d5d] transition-colors duration-200" />
              <input
                type="text"
                placeholder="Şarkı veya sanatçı arayın..."
                className="w-full bg-[#333333] border-none rounded-full py-2 pl-10 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f95d5d] transition-all duration-300 group-hover:bg-[#404040]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#f95d5d] transition-colors duration-200">
                <FaMicrophone className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;