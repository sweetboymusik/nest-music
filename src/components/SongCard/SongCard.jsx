import "./SongCard.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import tempImage from "../../assets/images/other/album_placeholder.png";

function SongCard({ artist, release, track }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="song-card">
      <button className="song-play">
        <img
          src={require(`../../assets/images/artwork/${release.artwork}`)}
          alt="album artwork"
          className="song-image"
        />
      </button>

      <div className="song-info">
        <span className="song-text">
          <b>{track.title}</b>
        </span>

        <div className="song-text">
          <Link className="song-link" to={`artists/${artist.name}`}>
            {artist.name}
          </Link>
        </div>

        <div className="song-text">
          <Link
            className="song-link"
            to={`artists/${artist.name}/${release.title}}`}
          >
            {release.title}
          </Link>
        </div>
      </div>
      <div className="song-icons">
        <span className="song-text-time">{track.length}</span>
        <button
          className="song-heart-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <FaHeart className="song-icon liked" />
          ) : isHovered ? (
            <FaHeart className="song-icon" />
          ) : (
            <FaRegHeart className="song-icon" />
          )}
        </button>
        <button>
          <FaPlus className="song-icon" />
        </button>
      </div>
    </div>
  );
}

export default SongCard;
