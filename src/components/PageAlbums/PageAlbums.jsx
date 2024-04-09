import React from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageAlbums({ artists, getArtist, setCurrentRelease }) {
  return (
    <div>
      <AlbumGrid
        artists={artists}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
    </div>
  );
}

export default PageAlbums;
