import "./BrowseGenre.css";
import GenreGrid from "../GenreGrid/GenreGrid";

function BrowseGenre({ filterArtists }) {
  return (
    <div className="browse-container">
      <div className="browse-header">
        <h2>Browse by Genre</h2>
        <hr />
      </div>
      <GenreGrid filterArtists={filterArtists} />
    </div>
  );
}

export default BrowseGenre;
