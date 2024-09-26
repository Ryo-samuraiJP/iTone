import React from 'react';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
      </div>
      <div>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
