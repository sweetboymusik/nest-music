import "./SongSection.css";
import SongGrid from "../SongGrid/SongGrid";

function SongSection({ artists }) {
  return (
    <div className="song-section-container">
      <div className="song-section-text">
        <h1>Featured Songs</h1>
      </div>
      <div>
        <SongGrid artists={artists} width={"calc(100vw - 600px)"} />
      </div>
    </div>
  );
}

export default SongSection;
