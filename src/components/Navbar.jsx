import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { AiFillHome } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={() => navigate('/')} src={assets.logo} alt='' className='w-10 lg:hidden'/>
          <div className='hidden sm:flex items-center gap-2'>
            <button className='bg-[#242424] hover:bg-[#3e3e3e] w-10 h-10 rounded-full flex items-center justify-center group transition-all duration-300'>
              <AiFillHome onClick={() => navigate('/')} className='text-2xl text-gray-400 group-hover:text-white transition-all duration-300 cursor-pointer'/>
            </button>
          </div>
          <div 
            onClick={() => navigate(-1)} 
            className='hidden sm:flex p-2 rounded-full cursor-pointer group bg-[#242424] hover:bg-[#3e3e3e] transition-all duration-300'
          >
            <button className='text-gray-400 group-hover:text-white flex transition-all duration-300'>
              <FaArrowLeft />
            </button>
          </div>
          <div 
            onClick={() => navigate(1)}
            className='hidden sm:flex p-2 rounded-full cursor-pointer group bg-[#242424] hover:bg-[#3e3e3e] transition-all duration-300'
          >
            <button className='text-gray-400 group-hover:text-white flex transition-all duration-300'>
              <FaArrowRight />
            </button>
          </div>
          <div className='group'>
            <form className='form relative'>
              <span className='absolute left-2 -translate-y-1/2 top-1/2 p-1'>
                <IoIosSearch className='text-2xl text-gray-400 group-hover:text-white transition-all duration-300'/>
              </span>
              <input
                className='rounded-full px-9 ml-1 py-1.5 border-2 border-transparent focus:outline-none bg-[#242424] hover:bg-[#3e3e3e] focus:border-blue-500 placeholder-gray-400 transition-all duration-300 cursor-pointer' 
                placeholder='Search...'
                type='text'
              />
              <button className='absolute right-3 -translate-y-1/2 top-1/2 p-1' type='reset'>
                <IoIosClose className='text-2xl text-gray-400 hover:text-white'/>
              </button>
            </form>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <button className='cursor-pointer font-bold'>
            <p className='h-10 w-30 bg-[#242424] hover:bg-[#3e3e3e] text-gray-400 hover:text-white text-[15px] py-2 px-3 rounded-full transition-all duration-300 hidden md:block'>Sign up</p>
          </button>
          <button className='cursor-pointer font-bold'>
            <p className='h-10 w-30 bg-white hover:bg-[#ffffffe6] text-black text-[15px] px-4 py-2 rounded-full transition-all duration-300 hidden md:block'>Log in</p>
          </button>
          {/* <span>
            <p className='bg-blue-400 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>R</p>
          </span> */}
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <button className='cursor-pointer font-medium'>
          <p className='bg-white hover:bg-[#ffffffe6] text-black px-4 py-1 rounded-full transition-all duration-300'>All</p>
        </button>
        <button className='cursor-pointer font-medium'>
          <p className='bg-[#242424] hover:bg-[#3e3e3e] text-gray-400 hover:text-white transition-all duration-300 px-4 py-1 rounded-full'>Music</p>
        </button>
        <button className='cursor-pointer font-medium'>
          <p className='bg-[#242424] hover:bg-[#3e3e3e] text-gray-400 hover:text-white transition-all duration-300 px-4 py-1 rounded-full'>Podcasts</p>
        </button>
      </div>
    </>
  );
}

export default Navbar;
