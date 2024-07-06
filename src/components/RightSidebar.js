import React from 'react';
import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';

const RightSidebar = ({ songs, favouriteArtists, playSong }) => {
  return (
    <aside className="w-80 p-6 bg-gradient-to-b from-[#111111] to-[#000000] hidden lg:block overflow-y-auto scrollbar-thin scrollbar-thumb-[#f95d5d] scrollbar-track-[#1a1a1a] hover:scrollbar-thumb-[#ff7b7b]">
      <h2 className="text-xl font-bold mb-6 text-[#f95d5d]">Yeni Parçalar</h2>
      {songs.slice(0, 2).map((song, index) => (
        <div key={index} className="flex items-center mb-4 hover:bg-[#1a1a1a] p-3 rounded-xl transition-all duration-300 group">
          <div className="relative mr-4">
            <img src={song.cover} alt={song.title} className="w-14 h-14 object-cover rounded-lg shadow-md" />
            <button onClick={() => playSong(song)} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay className="text-white" />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white group-hover:text-[#f95d5d] transition-colors duration-300">{song.title}</h3>
            <p className="text-sm text-gray-400">{song.artist} • {song.album}</p>
          </div>
          <FaEllipsisH className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
        </div>
      ))}

      <h2 className="text-xl font-bold mt-10 mb-6 text-[#f95d5d]">Sık Dinlenilen</h2>
      {songs.slice(2).map((song, index) => (
        <div key={index} className="flex items-center mb-4 hover:bg-[#1a1a1a] p-3 rounded-xl transition-all duration-300 group">
          <img src={song.cover} alt={song.title} className="w-14 h-14 object-cover rounded-lg shadow-md mr-4" />
          <div className="flex-1">
            <h3 className="font-semibold text-white group-hover:text-[#f95d5d] transition-colors duration-300">{song.title}</h3>
            <p className="text-sm text-gray-400">{song.artist}</p>
          </div>
          <FaHeart className="text-[#f95d5d] cursor-pointer hover:text-[#ff7b7b] transition-colors duration-300" />
        </div>
      ))}

      <h2 className="text-xl font-bold mt-10 mb-6 text-[#f95d5d]">Favori Sanatçılar</h2>
      {favouriteArtists.map((artist, index) => (
        <div key={index} className="flex items-center mb-4 hover:bg-[#1a1a1a] p-3 rounded-xl transition-all duration-300 group">
          <span className="text-2xl font-bold mr-4 text-[#f95d5d] group-hover:text-white transition-colors duration-300">{index + 1}</span>
          <img src={`https://picsum.photos/50/50?random=${index + 5}`} alt={artist.name} className="w-14 h-14 object-cover rounded-full shadow-md mr-4" />
          <div>
            <h3 className="font-semibold text-white group-hover:text-[#f95d5d] transition-colors duration-300">{artist.name}</h3>
            <p className="text-sm text-gray-400">{artist.subscribers}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default RightSidebar;