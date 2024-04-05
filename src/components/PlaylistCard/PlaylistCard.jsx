import React from 'react';
import './PlaylistCard.css';
import { Link } from 'react-router-dom';

function PlaylistCard({ playlist, photo }) {
    return (
        <div className="playlist-card">
            <Link to={`playlists/${playlist}`}>
                <img src={photo} alt={playlist} />
            </Link>
            <Link to={`playlists/${playlist}`}>
               <h2>{playlist}</h2>
            </Link>
        </div>
    );
}

export default PlaylistCard;