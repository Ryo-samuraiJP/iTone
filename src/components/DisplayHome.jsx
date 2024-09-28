import React from 'react';
import Navbar from './Navbar';
import { albumsData, popSongs } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Select by genre</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (<AlbumItem key={index} id={item.id} name={item.name} image={item.image} desc={item.desc} />))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {popSongs.map((item, index) => (<SongItem key={index} id={item.id} name={item.name} image={item.image} desc={item.desc} />))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
