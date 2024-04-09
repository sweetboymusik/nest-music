import React from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageAlbums({ artists, getArtist }) {
  return (
    <div>
      <AlbumGrid artists={artists} getArtist={getArtist} />
    </div>
  );
}

export default PageAlbums;
