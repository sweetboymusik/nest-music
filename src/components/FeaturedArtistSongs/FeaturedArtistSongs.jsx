import FeaturedArtistSongsGrid from "../FeaturedArtistSongsGrid/FeaturedArtistSongsGrid";

function FeaturedArtistSongs({
  artist,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  return (
    <div className="artist-featured-songs">
      <FeaturedArtistSongsGrid
        artist={artist}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
}

export default FeaturedArtistSongs;
