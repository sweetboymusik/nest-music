import React from "react";
import "./AlbumHeader.css";

import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import albumPlaceholder from "../../assets/images/other/album_placeholder.png";

function AlbumHeader() {
  return (
    <div className="AlbumHeader">
      <img className="AlbumHeaderImg" src={albumPlaceholder}></img>
      <div className="AlbumHeaderContent">
        <h3 className="AlbumHeaderArtist">ArtistName</h3>
        <h1 className="AlbumHeaderTitle">PlaylistName</h1>
        <div className="AlbumHeaderDetails">
          <span>
            <b>20 Songs</b>, 1h 50m
          </span>
          <div className="AlbumHeaderIcons">
            <FaHeart />
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumHeader;
