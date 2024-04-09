import "./AlbumGrid.css";
import AlbumCard from "../AlbumCard/AlbumCard";

function AlbumGrid({ artists, getArtist, setCurrentRelease, loadTrack }) {
  return (
    <div className="album-grid">
      {artists.map((artist) =>
        artist.releases.map((release) => (
          <AlbumCard
            key={release.id}
            artist={artist}
            release={release}
            getArtist={getArtist}
            setCurrentRelease={setCurrentRelease}
            loadTrack={loadTrack}
          />
        ))
      )}
    </div>
  );
}

export default AlbumGrid;
