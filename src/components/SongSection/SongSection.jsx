import "./SongSection.css";
import SongCard from "../SongCard/SongCard";
import SongGrid from "../SongGrid/SongGrid";

function SongSection({ artists }) {
  return (
    <div className="song-section-container">
      <div className="song-section-text">
        <h1>Featured Songs</h1>
      </div>
      <div>
        <SongGrid width={"calc(100vw - 600px)"} />
      </div>
      <div className="song-section-grid">
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
    </div>
  );
}

export default SongSection;
