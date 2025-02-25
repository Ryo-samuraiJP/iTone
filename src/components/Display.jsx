import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumPlaylists } from "../assets/assets";
import Footer from "./Footer";

// Display component that displays the DisplayHome and DisplayAlbum components based on the current route
const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.match(/album\/(\d+)/)[1] : ""; // Get the albumId from the URL
  const bgColor = albumPlaylists[Number(albumId)].bgColor; // Get the bgColor based on the albumId

  useEffect(() => {
    if (isAlbum) {
      // Change the background color of the display based on the bgColor of the album
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      // Change the background color of the display to # 121212
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Display;
