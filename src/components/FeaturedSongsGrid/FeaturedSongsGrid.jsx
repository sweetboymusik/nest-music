import SongCard from "../SongCard/SongCard";

function FeaturedSongsGrid({ featured, loadTrack }) {
  return (
    <div>
      {featured.map((item, index) => (
        <SongCard
          key={index}
          artist={item.artist}
          release={item.release}
          track={item.track}
          loadTrack={loadTrack}
        />
      ))}
    </div>
  );
}

export default FeaturedSongsGrid;
