import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import RightSidebar from './components/RightSidebar';

import NataliaDoco from './Music/NataliaDoco.mp3';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [currentSong, setCurrentSong] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const audioRef = useRef(null);

  const songs = [
    { title: 'Quedate Luna', artist: 'Natalia Doco', album: 'Deven - Banhart', url: NataliaDoco, cover: 'https://i.hizliresim.com/qnj9q2u.jpg' },
    { title: 'Calamity', artist: 'Arkwave', album: 'Calamity - 2023', url: 'https://example.com/calamity.mp3', cover: 'https://i.hizliresim.com/oapgpye.jpg' },
    { title: 'Last Resort (Reimagined)', artist: 'Papa Roach', album: 'Single - 2023', url: 'https://example.com/last_resort.mp3', cover: 'https://i.hizliresim.com/dngoh6x.png' },
    { title: 'Blood Orange', artist: 'Eternal Alice', album: 'Unknown', url: 'https://example.com/blood_orange.mp3', cover: '  https://i.hizliresim.com/6akquh7.jpg' },
    { title: 'Soul Decay', artist: 'Mass Thaw Suffer', album: 'Unknown', url: 'https://example.com/soul_decay.mp3', cover: 'https://i.hizliresim.com/ktt23zu.jpg' },
  ];

  const favouriteArtists = [
    { name: 'Quedate Luna', subscribers: '4.12k subscribers' },
    { name: 'Bloodywood', subscribers: '31k subscribers' },
    { name: 'Bad Omens', subscribers: '1.83k subscribers' },
    { name: 'Lorna Shore', subscribers: '320k subscribers' },
    { name: 'Annisokay', subscribers: '73k subscribers' },
  ];

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSongEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Header toggleSidebar={toggleSidebar} toggleLoginModal={toggleLoginModal} />
          <Home songs={songs} playSong={playSong} />
        </main>
        <RightSidebar songs={songs} favouriteArtists={favouriteArtists} playSong={playSong} />
      </div>
      <Player
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        currentSong={currentSong}
        currentTime={currentTime}
        duration={duration}
        formatTime={formatTime}
        volume={volume}
        setVolume={setVolume}
      />
      {showLoginModal && <LoginModal toggleLoginModal={toggleLoginModal} />}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />
    </div>
  );
};

export default App;