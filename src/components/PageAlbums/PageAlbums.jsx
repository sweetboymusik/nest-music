import React from "react";
import UserAlbumGrid from "../UserAlbumsGrid/UserAlbumGrid";

function PageAlbums({ userAlbums, getArtist, setCurrentRelease }) {
  return (
    <div>
      <UserAlbumGrid
        userAlbums={userAlbums}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
    </div>
  );
}

export default PageAlbums;
