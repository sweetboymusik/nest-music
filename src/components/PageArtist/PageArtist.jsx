import React from "react";
import { useState, useEffect } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

import "./PageArtist.css"

function PageArtist({ currentArtist, getArtist }) {
  return (
    <div className="artist-main">
      <div className="artist-header">
        {currentArtist.map((artist) => 

          <img className="artist-header-img"
           src={require(`../../assets/images/artists/${artist.photo}`)}
           alt="artist image"/>
        )}
        {currentArtist.map((artist) => 
          <div className="artist-header-text">{artist.name}</div>
        )}
        
      </div> 
    
      <div className="artist-body">
        <AlbumGrid artists={currentArtist} getArtist={getArtist} />
      </div>
    </div>
  );
}

export default PageArtist;
