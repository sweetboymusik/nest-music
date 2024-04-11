import { useState, useEffect, useRef } from "react";
import MySongsGrid from "../MySongsGrid/MySongsGrid";
import SongHeader from "../SongHeader/SongHeader";

function PageSongs({
  title,
  image,
  userTracks,
  getArtist,
  loadTrack,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  return (
    <div className="page-album">
      <SongHeader title={title} tracks={userTracks.length} image={image} />
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

export default PageSongs;
