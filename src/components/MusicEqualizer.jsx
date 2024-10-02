import React from 'react';

const MusicEqualizer = () => {
  return (
    <div className='flex gap-0.5 w-3 h-5 mr-5 md:w-5 xl:mr-5'>
      <div className='h-5 w-0.5 bg-blue-500 animate-equalizer-bar1 origin-bottom'></div>
      <div className='h-5 w-0.5 bg-blue-500 animate-equalizer-bar2 origin-bottom'></div>
      <div className='h-5 w-0.5 bg-blue-500 animate-equalizer-bar3 origin-bottom'></div>
      <div className='h-5 w-0.5 bg-blue-500 animate-equalizer-bar4 origin-bottom'></div>
    </div>
  );
}

export default MusicEqualizer;
