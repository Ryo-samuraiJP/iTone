import React from 'react';
import { MdOutlineArrowBack, MdOutlineArrowForward, MdOutlineLibraryMusic, MdOutlineSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const MobileNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 bg-black text-gray-400 sm:hidden'>
      <button to='/' className='flex flex-col items-center cursor-pointer hover:text-white transition-all duration-300'>
        <MdOutlineLibraryMusic className='text-2xl' />
      </button>
      <button onClick={() => navigate(-1)} className='flex flex-col items-center cursor-pointer hover:text-white transition-all duration-300'>
        <MdOutlineArrowBack className='text-2xl' />
      </button>
      <button to='/' className='flex flex-col items-center cursor-pointer hover:text-white transition-all duration-300'>
        <AiFillHome onClick={() => navigate('/')} className='text-2xl' />
      </button>
      <button onClick={() => navigate(1)} className='flex flex-col items-center cursor-pointer hover:text-white transition-all duration-300'>
        <MdOutlineArrowForward className='text-2xl' />
      </button>
      <button to='/' className='flex flex-col items-center cursor-pointer hover:text-white transition-all duration-300'>
        <MdOutlineSettings className='text-2xl' />
      </button>
    </div>
  );
}

export default MobileNavbar;
