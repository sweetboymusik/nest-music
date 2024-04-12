import SongCard from "../SongCard/SongCard";

function MySongsGrid({
  width,
  userTracks,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  return (
    <div className="song-grid" style={{ width: width }}>
      {userTracks.map((track, index) => (
        <SongCard
          key={index}
          artist={track.artist}
          release={track.release}
          track={track.track}
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

MySongsGrid.defaultProps = {
  width: "calc(100vw - 300px)",
};

export default MySongsGrid;
