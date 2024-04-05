import "./AlbumGrid.css";
import AlbumCard from "../AlbumCard/AlbumCard";

function AlbumGrid({ artists }) {
  return (
    <div className="album-grid">
      {artists.map((artist) =>
        artist.releases.map((release) => (
          <AlbumCard key={release.id} artist={artist} release={release} />
        ))
      )}
    </div>
  );
}

export default AlbumGrid;
