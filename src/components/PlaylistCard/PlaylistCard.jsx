import React from 'react';
import './PlaylistCard.css';

function PlaylistCard({ playlist, photo }) {
    return (
        <div className="playlist-card">
            <img src={photo} alt={playlist} />
            <h2>{playlist}</h2>
        </div>
    );
}

export default PlaylistCard;