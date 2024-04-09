import React from "react";
import "./GenreCard.css";
import { Link } from "react-router-dom";

function GenreCard({ genre, imageUrl, filterArtists }) {
  return (
    <Link
      onClick={() => {
        filterArtists(genre);
      }}
      className="genre-card"
      to={`/browse/${genre.toLowerCase()}`}
    >
      <img src={imageUrl} alt={genre} />
      <h2>{genre}</h2>
    </Link>
  );
}

export default GenreCard;
