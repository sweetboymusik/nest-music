import React from 'react';
import './ArtistCard.css';

function ArtistCard({ artist, imageUrl }) {
    return (
        <div className="artist-card">
            <img src={imageUrl} alt={artist} />
            <h2>{artist}</h2>
        </div>
    );
}

export default ArtistCard;