
import { FaPlay, FaHeart, FaEllipsisH, FaRandom, FaClock, FaChevronRight } from 'react-icons/fa';

const Home = ({ songs, playSong }) => {

  const playlists = [
    { name: 'Quedate Luna', tracks: 29, duration: '2h 15m', date: '23 June, 2023', image: 'https://i.hizliresim.com/qnj9q2u.jpg' },
    { name: 'Tracks without lyrics', tracks: 35, duration: '2h 15m', date: '27 April, 2023', image: 'https://i.hizliresim.com/oapgpye.jpg' },
    { name: 'Funny stuff', tracks: 208, duration: '6h 48m', date: '12 February, 2023', image: 'https://i.hizliresim.com/dngoh6x.png' },
    { name: 'Careful driving vibes', tracks: 84, duration: '5h 20m', date: '18 May, 2023', image: 'https://i.hizliresim.com/6akquh7.jpg' },
    { name: 'Philosophy during walking', tracks: 52, duration: '3h 36m', date: '21 December, 2022', image: 'https://i.hizliresim.com/ktt23zu.jpg' },
  ];

  const genres = ['Pop', 'Rock', 'Hip-Hop', 'Elektronik', 'Klasik', 'Jazz', 'R&B', 'Country'];

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8">
      <section className="bg-gradient-to-r from-[#1e1e1e] to-[#2a2a2a] rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Hoş geldin, Kullanıcı!</h1>
        <p className="text-lg text-gray-300 mb-4">Bugün ne dinlemek istersin?</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#f95d5d] text-white px-4 py-2 rounded-full hover:bg-[#ff7b7b] transition-all duration-200 font-medium flex items-center">
            <FaRandom className="mr-2" /> Karıştır
          </button>
          <button className="bg-[#2a2a2a] text-white px-4 py-2 rounded-full hover:bg-[#3a3a3a] transition-all duration-200 font-medium flex items-center">
            <FaClock className="mr-2" /> Son Çalınanlar
          </button>
        </div>
      </section>



      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Günün Önerileri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlists.slice(0, 3).map((playlist, index) => (
            <div key={index} className="bg-[#2a2a2a] rounded-lg p-4 hover:bg-[#3a3a3a] transition-all duration-300 group">
              <img src={playlist.image} alt={playlist.name} className="w-full aspect-square object-cover rounded-md mb-3" />
              <h3 className="text-lg font-bold mb-1 text-white group-hover:text-[#f95d5d] transition-colors duration-200">{playlist.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{playlist.tracks} parça • {playlist.duration}</p>
              <div className="flex justify-between items-center">
                <button onClick={() => playSong(songs[index])} className="bg-[#f95d5d] text-white p-2 rounded-full hover:bg-[#ff7b7b] transition-colors duration-200">
                  <FaPlay />
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-[#f95d5d] transition-colors duration-200">
                    <FaHeart />
                  </button>
                  <button className="text-gray-400 hover:text-[#f95d5d] transition-colors duration-200">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Türler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {genres.map((genre, index) => (
            <button key={index} className="bg-[#2a2a2a] text-white p-4 rounded-lg hover:bg-[#3a3a3a] transition-all duration-200 text-left">
              {genre}
              <FaChevronRight className="float-right mt-1" />
            </button>
          ))}
        </div>
      </section>

      <section className="overflow-x-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Oynatma Listem</h2>
        <table className="w-full bg-[#2a2a2a] rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-700">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">İsim</th>
              <th className="py-3 px-4">Parçalar</th>
              <th className="py-3 px-4">Süre</th>
              <th className="py-3 px-4">Tarih</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {playlists.map((playlist, index) => (
              <tr key={index} className="hover:bg-[#3a3a3a] transition-colors duration-200">
                <td className="py-3 px-4 text-gray-400">{index + 1}</td>
                <td className="py-3 px-4 flex items-center text-white">
                  <img src={playlist.image} alt={playlist.name} className="w-10 h-10 rounded mr-3" />
                  {playlist.name}
                </td>
                <td className="py-3 px-4 text-gray-400">{playlist.tracks}</td>
                <td className="py-3 px-4 text-gray-400">{playlist.duration}</td>
                <td className="py-3 px-4 text-gray-400">{playlist.date}</td>
                <td className="py-3 px-4">
                  <button onClick={() => playSong(songs[index % songs.length])} className="text-gray-400 hover:text-[#f95d5d] transition-colors duration-200">
                    <FaPlay />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-gradient-to-r from-[#f95d5d] to-[#ff7b7b] rounded-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Müziğin gücünü keşfedin</h2>
            <p className="text-lg mb-4 text-gray-100">Premium abonelikle kesintisiz müzik keyfi yaşayın.</p>
            <button className="bg-white text-[#f95d5d] px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 font-medium">
              Şimdi Yükselt
            </button>
          </div>
          <img src="https://i.hizliresim.com/mc0qjx1.png" alt="Premium" className="w-24 h-24 rounded-full" />
        </div>
      </section>
    </div>
  );
};

export default Home;