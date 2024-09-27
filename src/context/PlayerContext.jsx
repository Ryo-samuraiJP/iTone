import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: '00',
      minute: 0
    },
    totalTime: {
      second: '00',
      minute: 0
    }
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        const currentSec = Math.floor(audioRef.current.currentTime % 60);
        const currentMin = Math.floor(audioRef.current.currentTime / 60);
        const totalSec = Math.floor(audioRef.current.duration % 60);
        const totalMin = Math.floor(audioRef.current.duration / 60);

        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + '%';

        setTime({
          currentTime: {
            second: currentSec < 10 ? `0${currentSec}` : currentSec,
            minute: currentMin
          },
          totalTime: {
            second: totalSec < 10 ? `0${totalSec}` : totalSec,
            minute: totalMin
          }
        });
      }
    }, 1000)
  }, [audioRef]);

  const contextValue = {  
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;