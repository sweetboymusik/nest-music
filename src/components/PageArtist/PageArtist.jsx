import React from "react";
import { useState, useEffect } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

import "./PageArtist.css";

function PageArtist({ currentArtist, getArtist, setCurrentRelease }) {
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
