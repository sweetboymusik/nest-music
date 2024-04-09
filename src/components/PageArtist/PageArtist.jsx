import React from "react";
import { useState, useEffect } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageArtist({ currentArtist, getArtist }) {
  return (
    <div>
      <AlbumGrid artists={currentArtist} getArtist={getArtist} />
    </div>
  );
}

export default PageArtist;
