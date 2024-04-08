import "./ArtistCard.css";
import React from "react";
import { Link } from "react-router-dom";

function ArtistCard({ artist, imageUrl }) {
  return (
    <Link to={`../../artist/${artist}`}>
      <div className="artist-card">
        <img
          src={require(`../../assets/images/artists/${imageUrl}`)}
          alt={artist}
        />
        <h2>{artist}</h2>
      </div>
    </Link>
  );
}

export default ArtistCard;
