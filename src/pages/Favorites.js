import React from 'react';
import { FaPlay, FaHeart } from 'react-icons/fa';

const Favorites = ({ favouriteArtists, playSong, songs }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Favoriler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favouriteArtists.map((artist, index) => (
          <div key={index} className="bg-[#2a2a2a] rounded-lg p-4 flex items-center hover:bg-[#3a3a3a] transition-colors duration-200">
            <img src={`https://picsum.photos/50/50?random=${index + 5}`} alt={artist.name} className="w-12 h-12 object-cover rounded mr-4" />
            <div className="flex-1">
              <h2 className="font-bold">{artist.name}</h2>
              <p className="text-sm text-gray-400">{artist.subscribers}</p>
            </div>
            <FaHeart className="text-[#f95d5d] cursor-pointer hover:text-[#ff7b7b] transition-colors duration-200 mr-2" />
            <FaPlay
              className="cursor-pointer hover:text-[#f95d5d] transition-colors duration-200"
              onClick={() => playSong(songs[index % songs.length])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;