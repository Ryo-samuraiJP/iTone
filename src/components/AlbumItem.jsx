import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayButton from './PlayButton'; 
import { PlayerContext } from '../context/PlayerContext';

const AlbumItem = ({ id, image, name, desc }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); 
  const { playWithId } = useContext(PlayerContext); 

  return (
    <div 
      onClick={() => navigate(`/album/${id}`)} 
      className='relative min-w-[250px] p-2 px-3 rounded cursor-pointer hover:bg-[#51505045] transition-all duration-300 sm:min-w-[200px]' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    >
      <img className='rounded' src={image} alt='album image' />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      {isHovered && (
        <div className='absolute bottom-3 right-3 mb-24 mr-3 transition-all animate-slide-up'>
          <PlayButton albumId={name} onClick={() => playWithId(0, name)} />
        </div>
      )}
    </div>
  );
}

export default AlbumItem;
