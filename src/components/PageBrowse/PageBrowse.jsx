import "./PageBrowse.css";
import GenreGrid from "../GenreGrid/GenreGrid";

function PageBrowse() {
  return (
    <div className="browse-container">
      <div className="browse-header">
        <h2>Browse by Genre</h2>
        <hr />
      </div>
      <GenreGrid />
    </div>
  );
}

export default PageBrowse;
