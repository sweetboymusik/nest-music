import React from "react";
import "./GenreCard.css";
import { Link } from "react-router-dom";

function GenreCard({ genre, imageUrl }) {
  return (
    <Link className="genre-card" to={`genre/${genre.toLowerCase()}`}>
      <img src={imageUrl} alt={genre} />
      <h2>{genre}</h2>
    </Link>
  );
}

export default GenreCard;
