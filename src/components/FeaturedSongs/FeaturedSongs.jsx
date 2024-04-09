import FeaturedSongsGrid from "../FeaturedSongsGrid/FeaturedSongsGrid";

function FeaturedSongs({ featured, loadTrack }) {
  return (
    <div className="featured-songs">
      <FeaturedSongsGrid featured={featured} loadTrack={loadTrack} />
    </div>
  );
}

export default FeaturedSongs;
