// import "./ArtistGrid.css";
// import ArtistCard from "../ArtistCard/ArtistCard"; 

// function ArtistGrid() {
//     return (
//       <div className="artist-grid">
//             {/* Initial setup just to check if grid is working */}
//             <ArtistCard artist="Artist 1" imageUrl="https://images.unsplash.com/photo-1574169208507-84376144848b" />
//             <ArtistCard artist="Artist 2" imageUrl="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6" />
//             <ArtistCard artist="Artist 3" imageUrl="https://images.unsplash.com/photo-1541661538396-53ba2d051eed" />
//       </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import ArtistCard from "../ArtistCard/ArtistCard"; 
import "./ArtistGrid.css";

function ArtistGrid() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4999/artistsData')
      .then(response => response.json())
      .then(data => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setArtists(shuffled.slice(0, 3)); // currently setup to show only 3 random artists
      });
  }, []);

  return (
    <div className="artist-grid">
      {artists.map((artistData, index) => (
        <ArtistCard
          key={index}
          artist={artistData.name}
          imageUrl={artistData.photo}
        />
      ))}
    </div>
  );
}

export default ArtistGrid;