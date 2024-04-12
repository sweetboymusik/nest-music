// renders a playlist page, including a song header and a grid of songs

import "./PagePlaylist.css";
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
  return (
    <div className="page-playlist">
      <SongHeader
        title={title[0].name}
        tracks={userTracks.length}
        image={image[0].photo}
      />
      <MySongsGrid
        width={"100%"}
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
