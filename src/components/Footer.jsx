import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full mt-20'>
      <footer className='text-center'>
        <div className='grid grid-cols-1 ml-5 text-left sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='space-y-2'>
            <b>Company</b>
            <div className='text-gray-400 space-y-2'>
              <p className='space-y-2 hover:text-white hover:underline transition-all duration-100'>About</p>
              <p className='space-y-2 hover:text-white hover:underline transition-all duration-100'>Jobs</p>
              <p className='space-y-2 hover:text-white hover:underline transition-all duration-100'>For the Record</p>
            </div>
          </div>
          <div className='space-y-2'>
            <b>Communities</b>
            <div className='text-gray-400 space-y-2'>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>For Artists</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Developers</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Advertising</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Investors</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Vendors</p>
            </div>
          </div>
          <div className='space-y-2'>
            <b>Useful Links</b>
            <div className='text-gray-400 space-y-2'>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Support</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Free Mobile App</p>
            </div>
          </div>
          <div className='space-y-2'>
            <b>iTone Plans</b>
            <div className='text-gray-400 space-y-2'>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Premium Individual</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Premium Duo</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Premium Family</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>Premium Student</p>
              <p className='hover:text-white hover:underline tramnsition-all duration-100'>iTone Free</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-5 mt-10'>
          <ul className='flex mt-5 space-x-5'>
            <li className='h-10 w-10 flex items-center justify-center rounded-full bg-[#242424] hover:bg-[#3e3e3e]'>
              <a>
                <FaInstagram className='text-white text-lg'/>
              </a>
            </li>
            <li className='h-10 w-10 flex items-center justify-center rounded-full bg-[#242424] hover:bg-[#3e3e3e]'>
              <a>
                <FaXTwitter className='text-white text-lg' />
              </a>
            </li>
            <li className='h-10 w-10 flex items-center justify-center rounded-full bg-[#242424] hover:bg-[#3e3e3e]'>
              <a>
                <FaFacebook className='text-white text-lg' />
              </a>
            </li>
            <li className='h-10 w-10 flex items-center justify-center rounded-full bg-[#242424] hover:bg-[#3e3e3e]'>
              <a>
                <FaYoutube className='text-white text-lg' />
              </a>
            </li>
          </ul>
        </div>
        <hr className='border-1 border-gray-600 my-9'/>
        <div className='relative flex flex-col gap-5 text-sm text-gray-400 mb-20 mx-2 sm:flex-row'>
          <p className='hover:text-white transition-all duration-100'>Legal</p>
          <p className='hover:text-white transition-all duration-100'>Safety & Privacy Center</p>
          <p className='hover:text-white transition-all duration-100'>Privacy Policy</p>
          <p className='hover:text-white transition-all duration-100'>Cookies</p>
          <p className='hover:text-white transition-all duration-100'>About Ads</p>
          <p className='hover:text-white tramnsition-all duration-100'>Accessibility</p>
          <p className='absolute bottom-0 right-0 text-right text-gray-400 hidden sm:block'>&copy; 2024 iTone</p>
          <p className='text-center text-gray-400 mt-10 block sm:hidden'>&copy; 2024 iTone</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
