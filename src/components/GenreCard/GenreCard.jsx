import React from 'react';
import './GenreCard.css';

function GenreCard({ genre, imageUrl }) {
    return (
        <div className="genre-card">
            <img src={imageUrl} alt={genre} />
            <h2>{genre}</h2>
        </div>
    );
}

export default GenreCard;