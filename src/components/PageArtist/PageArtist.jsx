import React from "react";
import { useState, useEffect } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageArtist({ currentArtist, getArtist, setCurrentRelease }) {
  return (
    <div>
      <AlbumGrid
        artists={currentArtist}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
    </div>
  );
}

export default PageArtist;
