import React, { useContext, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { albumPlaylists } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { PlayerContext } from '../context/PlayerContext';

const DisplayHome = () => {
  const { playWithId } = useContext(PlayerContext);
  const recommendedRef = useRef(null);
  const featuredRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        e.currentTarget.scrollLeft += e.deltaY;
      }
    };

    const recommendedContainer = recommendedRef.current;
    const featuredContainer = featuredRef.current;

    recommendedContainer.addEventListener('wheel', handleWheel);
    featuredContainer.addEventListener('wheel', handleWheel);

    return () => {
      recommendedContainer.removeEventListener('wheel', handleWheel);
      featuredContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Recommended for you</h1>
        <div ref={recommendedRef} className='flex overflow-x-auto scroll-auto'>
          {albumPlaylists.slice(0, 8).map((item, index) => (
            <AlbumItem 
              key={index} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              desc={item.desc.slice(0, 60) + ' ...'} 
              playWithId={playWithId}
            />
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div ref={featuredRef} className='flex overflow-x-auto scroll-auto'>
          {albumPlaylists.slice(8).map((item, index) => (
            <AlbumItem 
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              desc={item.desc}
              playWithId={playWithId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
