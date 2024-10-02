import React from 'react';
import { MdOutlineAdd, MdOutlineLibraryMusic } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[10%] rounded flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='pl-2 cursor-pointer flex'>
          <img src={assets.logo} alt='iTone logo' className='w-10 mr-2'/>
          <p className='text-xl pt-1 italic font-bold'>iTone</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[90%] rounded'>
        <div className='p-4 flex item-center justify-between'>
          <button className='flex items-center gap-3 group cursor-pointer'>
            <MdOutlineLibraryMusic className='text-3xl text-gray-400 group-hover:text-white transition-all duration-300'/>
            <p className='font-bold text-gray-400 group-hover:text-white transition-all duration-300'>Your Library</p>
          </button>
          <button className='flex items-center gap-3 cursor-pointer rounded-full px-1 hover:bg-[#242424] transition-all duration-300'>
            <MdOutlineAdd className='text-2xl text-gray-400 hover:text-white transition-all duration-300'/>
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-bold'>Create your first playlist</h1>
          <p className='font-normal'>It&apos;s easy, we&apos;ll help you</p>
          <button className='px-4 py-1.5 text-[14px] rounded-full mt-4 font-bold bg-white hover:bg-[#ffffffe6] text-black transition-all duration-300'>Create playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className='font-bold'>Let&apos;s find some podcasts to follow</h1>
          <p className='font-normal'>We&apos;ll keep updated on new episodes</p>
          <button className='px-4 py-1.5 text-[14px] rounded-full mt-4 font-bold bg-white hover:bg-[#ffffffe6] text-black transition-all duration-300'>Browse podcasts</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
