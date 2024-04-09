import "./SongGrid.css";
import SongCard from "../SongCard/SongCard";

function SongGrid({
  width,
  currentArtist,
  currentRelease,
  loadTrack,
  getArtist,
  setCurrentRelease,
}) {
  return (
    <div className="song-grid" style={{ width: width }}>
      {currentArtist.map((artist) =>
        artist.releases.map(
          (release) =>
            release.id === currentRelease &&
            release.tracks.map((track) => (
              <SongCard
                key={track.id}
                artist={currentArtist}
                release={release}
                track={track}
                loadTrack={loadTrack}
                getArtist={getArtist}
                setCurrentRelease={setCurrentRelease}
              />
            ))
        )
      )}
    </div>
  );
}

SongGrid.defaultProps = {
  width: "calc(100vw - 300px)",
};

export default SongGrid;
