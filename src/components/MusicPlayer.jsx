import React, { useContext } from 'react';
import { IoIosShuffle, IoIosSkipBackward, IoIosSkipForward, IoIosPlay, IoIosPause, IoIosInfinite } from "react-icons/io";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList, HiOutlineSpeakerWave } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { CgMiniPlayer } from "react-icons/cg";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { PlayerContext } from '../context/PlayerContext';

const MusicPlayer = () => {
  const { track, seekBg, seekBar, seekPoint, playStatus, play, pause, time, playPrev, playNext } = useContext(PlayerContext);

  return (
    <div className='bottom-7 sm:bottom-0 left-0 right-0 z-50 h-[10%] bg-black flex justify-between items-center text-white pt-3 sm:pt-0 mb-5 sm:mb-0 px-4'>
      <div className='hidden sm:flex items-center gap-4 w-1/5'>
        <img className='w-12' src={track.image} alt='currently playing song image' />
        <div className='truncate w-full'>
          <p className='truncate'>{track.name}</p>
          <p className='truncate'>{track.artist}</p>
        </div>
      </div>
      <div className='flex flex-col items-center m-auto'>
        <div className='flex gap-2'>
          <IoIosShuffle className='text-2xl cursor-pointer' />
          <IoIosSkipBackward onClick={playPrev} className='text-2xl cursor-pointer' />
          {playStatus 
            ? <IoIosPause onClick={pause} className='text-2xl cursor-pointer' />
            : <IoIosPlay onClick={play} className='text-2xl cursor-pointer' />
          }
          <IoIosSkipForward onClick={playNext} className='text-2xl cursor-pointer' />
          <IoIosInfinite className='text-2xl cursor-pointer' />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekPoint} className='w-[60vw] max-w-[300px] bg-gray-500 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-gray-200 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='text-lg hidden xl:flex items-center gap-1.5 opacity-75'>
        <AiOutlinePlaySquare />
        <TbMicrophone2 />
        <HiOutlineQueueList />
        <LuMonitorSpeaker />
        <HiOutlineSpeakerWave />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <CgMiniPlayer />
        <RiExpandDiagonalLine />
      </div>
    </div>
  );
}

export default MusicPlayer;
