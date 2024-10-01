import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full'>
      <footer className='text-center text-white mt-20'>
        <div className='grid grid-cols-5 ml-2 text-left'>
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
          <div>
            <ul className='flex justify-center mt-5 space-x-2'>
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
        </div>
        <hr className='border-1 border-gray-600 my-9'/>
        <div className='flex gap-5 text-sm text-gray-400 mb-20 mx-2'>
          <p className='hover:text-white tramnsition-all duration-100'>Legal</p>
          <p className='hover:text-white tramnsition-all duration-100'>Safety & Privacy Center</p>
          <p className='hover:text-white tramnsition-all duration-100'>Privacy Policy</p>
          <p className='hover:text-white tramnsition-all duration-100'>Cookies</p>
          <p className='hover:text-white tramnsition-all duration-100'>About Ads</p>
          <p className='hover:text-white tramnsition-all duration-100'>Accessibility</p>
          <p className='ml-auto'>&copy; 2024 iTone</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
