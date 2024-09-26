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
  const {track, seekBg, seekBar, playStatus, play, pause} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt='' />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-2'>
          <IoIosShuffle className='text-2xl cursor-pointer' />
          <IoIosSkipBackward className='text-2xl cursor-pointer' />
          {playStatus 
            ? <IoIosPause onClick={pause} className='text-2xl cursor-pointer' />
            : <IoIosPlay onClick={play} className='text-2xl cursor-pointer' />
          }
          <IoIosSkipForward className='text-2xl cursor-pointer' />
          <IoIosInfinite className='text-2xl cursor-pointer' />
        </div>
        <div className='flex items-center gap-5'>
          <p>1:45</p>
          <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-500 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-gray-200 rounded-full' />
          </div>
          <p>4:26</p>
        </div>
      </div>
      <div className='text-lg hidden lg:flex items-center gap-1.5 opacity-75'>
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
