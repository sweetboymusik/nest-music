import React, { useEffect, useState } from "react";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import "./PlaylistGrid.css";

function PlaylistGrid({ getPlaylist }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4999/playlists")
      .then((response) => response.json())
      .then((data) => {
        setPlaylists(data);
      });
  }, []);

  return (
    <div className="playlist-grid">
      {playlists.map((playlists, index) => (
        <PlaylistCard
          key={index}
          playlist={playlists.name}
          photo={playlists.photo}
          getPlaylist={getPlaylist}
        />
      ))}
    </div>
  );
}

export default PlaylistGrid;
