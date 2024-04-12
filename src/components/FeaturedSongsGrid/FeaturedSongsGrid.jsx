import SongCard from "../SongCard/SongCard";

function FeaturedSongsGrid({
  featured,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  return (
    <div>
      {featured.map((item, index) => (
        <SongCard
          key={index}
          artist={item.artist}
          release={item.release}
          track={item.track}
          loadTrack={loadTrack}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
          addTrack={addTrack}
          removeTrack={removeTrack}
        />
      ))}
    </div>
  );
}

export default FeaturedSongsGrid;
