import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumPlaylists, alternativeSongs, assets, clubHot, edmSongs, globalHot, hiphopSongs, houseSongs, japanHot, jpopSongs, popSongs, rbSongs, rockSongs } from '../assets/assets';
import { LuClock } from "react-icons/lu";
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumPlaylists[id];
  const { playWithId } = useContext(PlayerContext);

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

  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt='' />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1 items-center justify-between'>
            <span>
              <img className='inline-block w-5' src={assets.logo} alt='' />
              <b> Spotify</b>
            </span>
            <span className='text-gray-400'>
              ・123,456 saves・{songsByGenre.length} songs, about 2 hr 30 min
            </span>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[2fr_2fr_0.5fr_0.4fr] sm:grid-cols-[2fr_2fr_0.5fr_0.4fr] mt-10 mb-2 pl-2 text-[#a7a7a7]'>
        <span className='items-center justify-between'>
          <p className='mr-4 inline-block font-semibold'>#</p>
          <p className='inline-block'>Title</p>
        </span>
        <p className=''>Album</p>
        <p className='hidden sm:block'>Date added</p>
        <LuClock className='m-auto text-lg' />
      </div>
      <hr className='border-1 border-slate-700 mb-3'/>
      {
        songsByGenre.map((item, index) => (
          <div 
            onClick={() => playWithId(index, albumData.name)} // Pass the correct index
            key={index}
            className='grid grid-cols-[2fr_2fr_0.5fr_0.35fr] sm:grid-cols-[2fr_2fr_0.5fr_0.35fr] gap-2 p-2 itemes-center text-[#a7a7a7] hover:bg-[#51505045] cursor-pointer'
          >
            <div className='text-white flex items-center'>
              <b className='mr-4 text-[#a7a7a7] font-normal'>{index + 1}</b>
              <img className='inline w-10 mr-5 rounded' src={item.image} alt='' />
              <span className='inline-block'>
                <span className=''>{item.name}</span>
                <span className='block text-sm text-[#a7a7a7]'>{item.artist}</span>
              </span>
            </div>
            <div className='flex items-center'>
              <p className='text-[15px]'>{item.album}</p>
            </div>
            <div className='flex items-center'>
              <p className='text-[15px] hidden sm:block'>5 weeks ago</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-[15px]'>{item.duration}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default DisplayAlbum;
