import "./SongGrid.css";
import SongCard from "../SongCard/SongCard";

function SongGrid({ artists }) {
  return (
    <div className="song-grid">
      {artists.map((artist) =>
        artist.releases.map((release) =>
          release.tracks.map((track) => (
            <SongCard
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

export default SongGrid;
