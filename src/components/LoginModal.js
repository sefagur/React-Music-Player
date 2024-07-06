import React from 'react';
import { FaTimes, FaSpotify, FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginModal = ({ toggleLoginModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-[#111111] rounded-3xl w-full max-w-md shadow-2xl border border-gray-800 transition-all duration-300 overflow-hidden">
        <div className="relative h-48">
          <img src="https://i.hizliresim.com/mc0qjx1.png" alt="Music" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111] flex items-end p-6">
            <h2 className="text-3xl font-bold text-white">SefMusic'e Giriş</h2>
          </div>
          <button onClick={toggleLoginModal} className="absolute top-4 right-4 text-white hover:text-[#f95d5d] transition-colors duration-200">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-8">
          <form className="space-y-6">
            <div>
              <input type="email" id="email" className="w-full bg-[#222222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f95d5d] transition-all duration-200" placeholder="E-posta" />
            </div>
            <div>
              <input type="password" id="password" className="w-full bg-[#222222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f95d5d] transition-all duration-200" placeholder="Şifre" />
            </div>
            <button onClick={toggleLoginModal}className="w-full bg-gradient-to-r from-[#f95d5d] to-[#ff7b7b] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 transform hover:scale-105">
              Giriş Yap
            </button>
          </form>
          <div className="mt-8">
            <p className="text-center text-gray-400 mb-4">veya şununla giriş yap</p>
            <div className="flex justify-center space-x-4">
              {[
                { icon: FaSpotify, bg: '#1DB954' },
                { icon: FaGoogle, bg: '#4285F4' },
                { icon: FaFacebook, bg: '#3b5998' }
              ].map((item, index) => (
                <button key={index} className={`bg-[${item.bg}] p-3 rounded-full transition-all duration-200 hover:opacity-80 hover:scale-110`}>
                  <item.icon className="text-white text-xl" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;