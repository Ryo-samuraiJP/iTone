import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <AiFillHome className='text-2xl'/>
          <p className=''></p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <IoIosSearch className='text-2xl'/>
          <p className='font-normal'>What do you want to play?</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex item-center justify-between'>
          <div className='flex items-center gap-3'>
            <MdOutlineLibraryMusic className='text-3xl'/>
            <p className='font-bold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <GoPlus className='text-2xl'/>
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-bold'>Create your playlist</h1>
          <p className='font-normal'>It&apos;s easy, we&apos;ll help you</p>
          <button className='px-4 py-1.5 bg-white text-[14px] text-black rounded-full mt-4 font-bold'>Create playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className='font-bold'>Let&apos;s find some podcasts to follow</h1>
          <p className='font-normal'>We&apos;ll keep updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[14px] text-black rounded-full mt-4 font-bold'>Browse podcasts</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
