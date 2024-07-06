import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Playlists = ({ playlists, playSong, songs }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Çalma Listeleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist, index) => (
          <div key={index} className="bg-[#2a2a2a] rounded-lg p-4 hover:bg-[#3a3a3a] transition-colors duration-200">
            <h2 className="text-xl font-bold mb-2">{playlist.name}</h2>
            <p className="text-sm text-gray-400 mb-4">{playlist.tracks} parça • {playlist.duration}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{playlist.date}</span>
              <FaPlay 
                className="cursor-pointer hover:text-[#f95d5d] transition-colors duration-200" 
                onClick={() => playSong(songs[index % songs.length])} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;