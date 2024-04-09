import "./AlbumGrid.css";
import AlbumCard from "../AlbumCard/AlbumCard";

function AlbumGrid({ artists, getArtist }) {
  return (
    <div className="album-grid">
      {artists.map((artist) =>
        artist.releases.map((release) => (
          <AlbumCard
            key={release.id}
            artist={artist}
            release={release}
            getArtist={getArtist}
          />
        ))
      )}
    </div>
  );
}

export default AlbumGrid;
