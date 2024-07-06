import React from 'react';
import { FaHome, FaList, FaChartBar, FaHeart, FaClock, FaHistory, FaMicrophone, FaTimes, FaPlus } from 'react-icons/fa';

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const sidebarItems = [
    { label: 'Akış', icon: <FaHome />, path: '/' },
    { label: 'Çalma Listeleri', icon: <FaList />, path: '/' },
    { label: 'İstatistikler', icon: <FaChartBar />, path: '/' },
    { label: 'Favoriler', icon: <FaHeart />, path: '/' },
    { label: 'Sonra Dinle', icon: <FaClock />, path: '/sonradinle' },
    { label: 'Geçmiş', icon: <FaHistory />, path: '/gecmis' },
    { label: 'Podcastler', icon: <FaMicrophone />, path: '/podcastler' },
  ];

  const genres = [
    { name: 'Metal', color: '#f95d5d' },
    { name: 'Elektro', color: '#4CAF50' },
    { name: 'Funk', color: '#FFC107' },
    { name: 'Disko', color: '#9C27B0' },
  ];

  return (
    <aside className={`w-60 p-4 bg-gradient-to-b from-[#111111] to-[#000000] fixed h-full z-20 transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-[#f95d5d] scrollbar-track-[#1a1a1a] hover:scrollbar-thumb-[#ff7b7b] ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 shadow-xl`}>
      <button className="md:hidden absolute top-4 right-4 text-white hover:text-[#f95d5d] transition-colors duration-200" onClick={toggleSidebar}>
        <FaTimes className="text-lg" />
      </button>
      <h1 className="text-2xl font-bold mb-8 text-[#f95d5d] tracking-wide">SefMusic</h1>
      <nav className="mb-8">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index} className="group">
              <a href={item.path} className="flex items-center py-2 px-3 text-gray-300 rounded-lg group-hover:bg-[#1a1a1a] transition-all duration-300">
                <span className="text-lg mr-3 text-[#f95d5d] group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-8">
        <h2 className="text-xs uppercase mb-3 text-gray-400 font-semibold tracking-wider">Çalma Listeniz</h2>
        <ul className="space-y-2">
          {genres.map((genre, index) => (
            <li key={index} className="group">
              <a href={`/genre/${genre.name.toLowerCase()}`} className="flex items-center py-2 px-3 text-gray-300 rounded-lg group-hover:bg-[#1a1a1a] transition-all duration-300">
                <span className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: genre.color }}></span>
                <span className="font-medium text-sm">{genre.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full bg-[#1a1a1a] text-[#f95d5d] py-2 px-3 rounded-lg text-sm font-semibold hover:bg-[#f95d5d] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
        <FaPlus className="text-xs" />
        <span>Yeni Playlist</span>
      </button>
    </aside>
  );
};

export default Sidebar;