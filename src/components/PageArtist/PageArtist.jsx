import React from "react";
import { useState, useEffect } from "react";

import AlbumGrid from "../AlbumGrid/AlbumGrid";
import SongGrid from "../SongGrid/SongGrid";

import "./PageArtist.css";

function PageArtist({ currentArtist, getArtist, setCurrentRelease, currentRelease, loadTrack }) {
  return (
    <div className="artist-main">
      <div className="artist-header">
        {currentArtist.map((artist, index) => (
          <img
            key={index}
            className="artist-header-img"
            src={require(`../../assets/images/artists/${artist.photo}`)}
            alt="artist image"
          />
        ))}
        {currentArtist.map((artist, index) => (
          <div key={index} className="artist-header-text">
            {artist.name}
          </div>
        ))}
      </div>

      <div className="artist-body">
        <div>
          Top Songs
          <SongGrid
            currentArtist={currentArtist}
            currentRelease={currentRelease}
            loadTrack={loadTrack}
            width={"1000px"}
          />
        </div>
        Discography
        <AlbumGrid
          artists={currentArtist}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
        />
      </div>
    </div>
  );
}

export default PageArtist;
