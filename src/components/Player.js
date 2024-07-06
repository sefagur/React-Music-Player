import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaHeart, FaVolumeUp, FaEllipsisH } from 'react-icons/fa';

const Player = ({ isPlaying, togglePlay, currentSong, currentTime, duration, formatTime, volume, setVolume }) => {
  return (
    <footer className="bg-[#181818] p-2 sm:p-4 border-t border-gray-700">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex items-center w-full sm:w-1/3 mb-4 sm:mb-0">
          <img 
            src={currentSong?.cover || "https://i.hizliresim.com/ax1gtrl.png"} 
            alt="Current song" 
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-3 rounded-md"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-sm sm:text-base truncate">{currentSong?.title || "Şarkı seçilmedi"}</h3>
            <p className="text-xs sm:text-sm text-gray-400 truncate">{currentSong?.artist || "Bir şarkı seçin"}</p>
          </div>
          <div className="flex items-center ml-2">
            <FaHeart className="text-[#f95d5d] cursor-pointer hover:text-[#ff7b7b] transition-colors duration-200 text-lg sm:text-xl" />
            <FaEllipsisH className="ml-3 cursor-pointer hover:text-[#f95d5d] transition-colors duration-200 text-lg sm:text-xl" />
          </div>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/3 mb-4 sm:mb-0">
          <div className="flex items-center mb-2">
            <FaStepBackward className="mr-4 cursor-pointer hover:text-[#f95d5d] transition-colors duration-200 text-lg sm:text-xl" />
            {isPlaying ? (
              <FaPause onClick={togglePlay} className="text-2xl sm:text-3xl cursor-pointer hover:text-[#f95d5d] transition-colors duration-200" />
            ) : (
              <FaPlay onClick={togglePlay} className="text-2xl sm:text-3xl cursor-pointer hover:text-[#f95d5d] transition-colors duration-200" />
            )}
            <FaStepForward className="ml-4 cursor-pointer hover:text-[#f95d5d] transition-colors duration-200 text-lg sm:text-xl" />
          </div>
          <div className="w-full max-w-[300px] bg-gray-600 rounded-full h-1 cursor-pointer group">
            <div
              className="bg-white h-1 rounded-full relative"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="absolute right-0 w-3 h-3 bg-white rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          </div>
          <div className="flex justify-between w-full max-w-[300px] text-xs mt-1 text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center w-full sm:w-1/3 justify-end">
          <FaVolumeUp className="mr-2 cursor-pointer hover:text-[#f95d5d] transition-colors duration-200 text-lg sm:text-xl" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-20 sm:w-24 accent-[#f95d5d] cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Player;