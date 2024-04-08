import "./SongSection.css";
import SongCard from "../SongCard/SongCard";

function SongSection({ artists }) {
  return (
    <div class="song-section-container">
      <div class="song-section-text">
        <h1>Featured Songs</h1>
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
