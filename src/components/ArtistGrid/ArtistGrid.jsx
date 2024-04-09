import React, { useEffect, useState } from "react";
import ArtistCard from "../ArtistCard/ArtistCard";
import "./ArtistGrid.css";

function ArtistGrid({ artists, getArtist }) {
  return (
    <div className="artist-grid">
      {artists.map((artists, index) => (
        <ArtistCard
          key={index}
          artist={artists.name}
          id={artists.id}
          imageUrl={artists.photo}
          getArtist={getArtist}
        />
      ))}
    </div>
  );
}

export default ArtistGrid;
