import FeaturedSongsGrid from "../FeaturedSongsGrid/FeaturedSongsGrid";

function FeaturedSongs({ featured, loadTrack, getArtist, setCurrentRelease }) {
  return (
    <div className="featured-songs">
      <FeaturedSongsGrid
        featured={featured}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
    </div>
  );
}

export default FeaturedSongs;
