import { createContext, useRef, useState, useEffect } from "react";
import { alternativeSongs, clubHot, edmSongs, globalHot, hiphopSongs, houseSongs, japanHot, jpopSongs, popSongs, rbSongs, rockSongs } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(popSongs[0]);
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
  const [currentSongs, setCurrentSongs] = useState(popSongs); 
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = async (id, genre) => {
    let songs;
    switch (genre) {
      case 'All EDM':
        songs = edmSongs;
        break;
      case 'All Hip Hop / Rap':
        songs = hiphopSongs;
        break;
      case 'All R&B':
        songs = rbSongs;
        break;
      case 'All House':
        songs = houseSongs;
        break;
      case 'All Rock':
        songs = rockSongs;
        break;
      case 'All J-Pop':
        songs = jpopSongs;
        break;
      case 'All Alternative':
        songs = alternativeSongs;
        break;
      case 'Hot 30 Global':
        songs = globalHot;
        break;
      case 'Hot 20 Night Club': 
        songs = clubHot;
        break;
      case 'Hot 10 Japan':
        songs = japanHot;
        break;
      default:
        songs = popSongs;
    }

    if (track.id === songs[id].id && playStatus) {
      pause();
    } else {
      setCurrentSongs(songs);
      setCurrentAlbumId(genre);
      await setTrack(songs[id]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const playPrev = async () => {
    const currentIndex = currentSongs.findIndex(song => song.id === track.id);
    if (currentIndex > 0) {
      await setTrack(currentSongs[currentIndex - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const playNext = async () => {
    const currentIndex = currentSongs.findIndex(song => song.id === track.id);
    if (currentIndex < currentSongs.length - 1) {
      await setTrack(currentSongs[currentIndex + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const seekPoint = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
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
    seekBar, seekPoint,
    track, setTrack,
    playStatus, setPlayStatus,
    time, setTime,
    play,
    pause,
    playWithId,
    playPrev,
    playNext,
    currentAlbumId, setCurrentAlbumId
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;