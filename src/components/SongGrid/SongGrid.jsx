import "./SongGrid.css";
import SongCard from "../SongCard/SongCard";

function SongGrid({ artists, width }) {
  return (
    <div className="song-grid" style={{ width: width }}>
      {artists.map((artist) =>
        artist.releases.map((release) =>
          release.tracks.map((track) => (
            <SongCard
              width={""}
              key={track.id}
              artist={artist}
              release={release}
              track={track}
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
