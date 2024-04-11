import React from "react";
import "./PlaylistCard.css";
import { Link } from "react-router-dom";

function PlaylistCard({ playlist, photo, getPlaylist }) {
  return (
    <div className="playlist-card">
      <Link
        onClick={() => {
          getPlaylist(playlist);
        }}
        to={`../../playlists/${playlist}`}
      >
        <img
          src={require(`../../assets/images/playlists/${photo}`)}
          alt={playlist}
        />
      </Link>
      <Link
        onClick={() => {
          getPlaylist(playlist);
        }}
        to={`../../playlists/${playlist}`}
      >
        <h2>{playlist}</h2>
      </Link>
    </div>
  );
}

export default PlaylistCard;
