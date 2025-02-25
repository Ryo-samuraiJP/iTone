import { createContext, useRef, useState, useEffect } from "react";
import {
  alternativeSongs,
  clubHot,
  edmSongs,
  globalHot,
  hiphopSongs,
  houseSongs,
  japanHot,
  jpopSongs,
  popSongs,
  rbSongs,
  rockSongs,
} from "../assets/assets";

export const PlayerContext = createContext();

// PlayerContextProvider that provides the audio player context to its children
const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(popSongs[0]); // Default track is the first song in the popSongs array
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: "00",
      minute: 0,
    },
    totalTime: {
      second: "00",
      minute: 0,
    },
  });
  const [currentSongs, setCurrentSongs] = useState(popSongs);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  // Play the audio when the play button is clicked
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  // Pause the audio when the pause button is clicked
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id, genre) => {
    let songs;
    switch (genre) {
      case "All EDM":
        songs = edmSongs;
        break;
      case "All Hip Hop / Rap":
        songs = hiphopSongs;
        break;
      case "All R&B":
        songs = rbSongs;
        break;
      case "All House":
        songs = houseSongs;
        break;
      case "All Rock":
        songs = rockSongs;
        break;
      case "All J-Pop":
        songs = jpopSongs;
        break;
      case "All Alternative":
        songs = alternativeSongs;
        break;
      case "Hot 30 Global":
        songs = globalHot;
        break;
      case "Hot 20 Night Club":
        songs = clubHot;
        break;
      case "Hot 10 Japan":
        songs = japanHot;
        break;
      default:
        songs = popSongs;
    }

    if (track.id === songs[id].id && playStatus) {
      // Pause the audio if the same song is clicked
      pause();
    } else {
      // Play the audio if a different song is clicked
      setCurrentSongs(songs);
      setCurrentAlbumId(genre);
      await setTrack(songs[id]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // Play the previous song in the currentSongs array
  const playPrev = async () => {
    const currentIndex = currentSongs.findIndex((song) => song.id === track.id);
    // Check if the current song is the first song in the array
    if (currentIndex > 0) {
      await setTrack(currentSongs[currentIndex - 1]); // Set the previous song as the current song
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // Play the next song in the currentSongs array
  const playNext = async () => {
    const currentIndex = currentSongs.findIndex((song) => song.id === track.id);
    // Check if the current song is the last song in the array
    if (currentIndex < currentSongs.length - 1) {
      await setTrack(currentSongs[currentIndex + 1]); // Set the next song as the current song
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // Seek to a specific point in the audio when the seek bar is clicked
  const seekPoint = async (e) => {
    // Set the current time of the audio to the point where the seek bar is clicked
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      // Update the current time and total time of the audio every second
      audioRef.current.ontimeupdate = () => {
        const currentSec = Math.floor(audioRef.current.currentTime % 60); // Get the current second of the audio
        const currentMin = Math.floor(audioRef.current.currentTime / 60); // Get the current minute of the audio
        const totalSec = Math.floor(audioRef.current.duration % 60); // Get the total second of the audio
        const totalMin = Math.floor(audioRef.current.duration / 60); // Get the total minute of the audio

        // Update the width of the seek bar based on the current time of the audio
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        setTime({
          currentTime: {
            second: currentSec < 10 ? `0${currentSec}` : currentSec, // Add a leading zero if the current second is less than 10
            minute: currentMin, // Set the current minute of the audio
          },
          totalTime: {
            second: totalSec < 10 ? `0${totalSec}` : totalSec, // Add a leading zero if the total second is less than 10
            minute: totalMin, // Set the total minute of the audio
          },
        });
      };
    }, 1000); // Update the current time and total time of the audio every second
  }, [audioRef]); // Update the current time and total time of the audio when the audioRef changes

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    seekPoint,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    playPrev,
    playNext,
    currentAlbumId,
    setCurrentAlbumId,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
