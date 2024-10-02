import React, { useContext } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
import { PlayerContext } from '../context/PlayerContext';

const PlayButton = ({ onClick, albumId }) => {
  const { playStatus, currentAlbumId } = useContext(PlayerContext);

  const handleClick = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <button className='cursor-pointer' onClick={handleClick}>
      <div className='w-[50px] h-[50px] bg-blue-50 rounded-full relative shadow-[inset_0px_0px_1px_1px_rgba(0,0,0,0.3),_2px_3px_5px_rgba(0,0,0,0.1)] flex items-center justify-center'>
        <div className='absolute w-[45px] h-[45px] z-10 bg-black rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-[1px]' />
        <label className='group cursor-pointer absolute w-[45px] h-[45px] bg-gradient-to-b from-blue-600 to-blue-400 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-[inset_0px_4px_2px_#60a5fa,inset_0px_-4px_0px_#1e3a8a,0px_0px_2px_rgba(0,0,0,10)] active:shadow-[inset_0px_4px_2px_rgba(96,165,250,0.5),inset_0px_-4px_2px_rgba(37,99,235,0.5),0px_0px_2px_rgba(0,0,0,10)] z-20 flex items-center justify-center'>
          <div className='w-5 group-active:w-[20px] fill-blue-100 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.5)] flex items-center justify-center'>
            {playStatus && currentAlbumId === albumId ? <FaPause /> : <FaPlay />}
          </div>
        </label>
      </div>
    </button>
  );
};

export default PlayButton;
