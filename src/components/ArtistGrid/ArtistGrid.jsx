import React, { useEffect, useState } from 'react';
import ArtistCard from "../ArtistCard/ArtistCard"; 
import "./ArtistGrid.css";

function ArtistGrid() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4999/artists')
      .then(response => response.json())
      .then(data => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setArtists(shuffled.slice(0, 3)); // currently setup to show only 3 random artists
      });
  }, []);

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