// renders a page with a list of songs, including a header and a grid of songs

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
    <div>
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
