import React, { useEffect, useState } from "react";
import ArtistCard from "../ArtistCard/ArtistCard";
import "./ArtistGrid.css";

function ArtistGrid({ artists }) {
  return (
    <div className="artist-grid">
      {artists.map((artists, index) => (
        <ArtistCard
          key={index}
          artist={artists.name}
          imageUrl={artists.photo}
        />
      ))}
    </div>
  );
}

export default ArtistGrid;
