import "./PageBrowse.css";
import { Routes, Route } from "react-router-dom";
import BrowseCard from "../BrowseCard/BrowseCard";
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
