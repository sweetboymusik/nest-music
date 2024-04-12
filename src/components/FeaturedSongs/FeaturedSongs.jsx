import FeaturedSongsGrid from "../FeaturedSongsGrid/FeaturedSongsGrid";

function FeaturedSongs({
  featured,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  return (
    <div className="featured-songs">
      <FeaturedSongsGrid
        featured={featured}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
}

export default FeaturedSongs;
