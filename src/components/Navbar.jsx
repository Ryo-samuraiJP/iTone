import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <div className='bg-black p-2 rounded-2xl cursor-pointer'>
            <IoIosArrowBack />
          </div>
          <div className='bg-black p-2 rounded-2xl cursor-pointer'>
            <IoIosArrowForward />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-black text-gray-300 font-bold text-[15px] py-1 px-3 rounded-2xl cursor-pointer'>Sign up</p>
          <p className='bg-white text-black font-bold text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Log in</p>
          {/* <p className='bg-green-400 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>R</p> */}
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-gray-700 px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-gray-700 px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>
    </>
  );
}

export default Navbar;
