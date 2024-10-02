import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumPlaylists, alternativeSongs, assets, clubHot, edmSongs, globalHot, hiphopSongs, houseSongs, japanHot, jpopSongs, popSongs, rbSongs, rockSongs } from '../assets/assets';
import { LuClock } from "react-icons/lu";
import { PlayerContext } from '../context/PlayerContext';
import MusicEqualizer from './MusicEqualizer';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumPlaylists[id];
  const { playWithId, track, playStatus } = useContext(PlayerContext);

  const getSongsByGenre = (genre) => {
    switch (genre) {
      case 'All EDM':
        return edmSongs;
      case 'All Hip Hop / Rap':
        return hiphopSongs;
      case 'All R&B':
        return rbSongs;
      case 'All House':
        return houseSongs;
      case 'All Rock':
        return rockSongs;
      case 'All J-Pop':
        return jpopSongs;
      case 'All Alternative':
        return alternativeSongs;
      case 'Hot 30 Global':
        return globalHot;
      case 'Hot 20 Night Club': 
        return clubHot;
      case 'Hot 10 Japan':
        return japanHot;
      default:
        return popSongs;
    }
  };
  
  const songsByGenre = getSongsByGenre(albumData.name);

  const convertToSeconds = (duration) => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return (minutes * 60) + seconds;
  };
  
  const totalDurationInSeconds = songsByGenre.reduce((total, song) => {
    const durationInSeconds = convertToSeconds(song.duration);
    return total + durationInSeconds;
  }, 0);
  
  const totalDurationInMinutes = Math.floor(totalDurationInSeconds / 60);
  const hours = Math.floor(totalDurationInMinutes / 60);
  const minutes = totalDurationInMinutes % 60;
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt='' />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-6 md:text-7xl'>{albumData.name}</h2>
          <h4 className='mb-2'>{albumData.desc}</h4>
          <p className='mb-1 items-center justify-between'>
            <span>
              <img className='inline-block w-5 mr-2' src={assets.logo} alt='' />
              <b>iTone</b>
            </span>
            <span className='text-gray-400'>
              <b>・</b>{songsByGenre.length} songs, about {hours} hr {minutes} min
            </span>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[1fr_4fr] sm:grid-cols-[2fr_2fr_0.5fr_0.3fr] gap-2 p-2 items-center mt-10 text-[#a7a7a7]'>
        <span className='flex items-center'>
          <p className='mx-2 inline-block font-semibold'>#</p>
          <p className='inline-block ml-16'>Title</p>
        </span>
        <p className='hidden sm:block ml-24 lg:ml-16'>Album</p>
        <p className='hidden sm:block md:mr-6'>Release</p>
        <LuClock className='m-auto text-lg hidden sm:block' />
      </div>
      <hr className='border-1 border-gray-600 mb-3'/>
      {
        songsByGenre.map((item, index) => (
          <div 
            onClick={() => playWithId(index, albumData.name)} // Pass the correct index
            key={index}
            className='grid grid-cols-[1fr_4fr] sm:grid-cols-[2fr_2fr_0.5fr_0.3fr] gap-2 p-2 itemes-center text-[#a7a7a7] hover:bg-[#51505045] cursor-pointer'
          >
            <div className='text-white flex items-center'>
              {track.id === item.id && playStatus ? (
                <MusicEqualizer />
              ) : (
                <b className='mr-4 text-[#a7a7a7] font-normal w-14 md:w-7 xl:w-6 text-right'>{index + 1}</b>
              )}
              <img className='inline w-10 mr-5 rounded' src={item.image} alt='' />
              <span className='flex flex-col w-full'>
                <span className='truncate'>{item.name}</span>
                <span className='block text-sm text-[#a7a7a7] truncate'>{item.artist}</span>
              </span>
            </div>
            <div className='hidden items-center sm:flex md:ml-24 lg:ml-16'>
              <p className='text-[15px]'>{item.album}</p>
            </div>
            <div className='fhidden items-center sm:flex'>
              <p className='text-[15px] hidden sm:block'>{item.release}</p>
            </div>
            <div className='hidden items-center sm:flex justify-center'>
              <p className='text-[15px]'>{item.duration}</p>
            </div>
          </div>
        ))
      }
    </>  
  );
}

export default DisplayAlbum;
