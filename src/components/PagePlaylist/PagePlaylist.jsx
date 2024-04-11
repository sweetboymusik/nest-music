import { useState, useEffect, useRef } from "react";
import MySongsGrid from "../MySongsGrid/MySongsGrid";
import SongHeader from "../SongHeader/SongHeader";

function PagePlaylist({
  title,
  image,
  userTracks,
  getArtist,
  loadTrack,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  useEffect(() => {
    console.log("from Playlist Page", userTracks);
  }, [userTracks]);

  return (
    <div className="page-album">
      <SongHeader
        title={title[0].name}
        tracks={userTracks.length}
        image={image[0].photo}
      />
      <MySongsGrid
        userTracks={userTracks}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
}

export default PagePlaylist;
