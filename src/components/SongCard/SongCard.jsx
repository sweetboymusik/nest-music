import "./SongCard.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  FaPlus,
  FaHeart,
  FaHeartBroken,
  FaRegHeart,
  FaMinus,
} from "react-icons/fa";

function SongCard({
  artist,
  release,
  track,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addTrack,
  removeTrack,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  let [liked, setLiked] = useState();
  let [added, setAdded] = useState(track.added);
  let [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setLiked(track.liked);
    setAdded(track.added);
  }, [track]);

  return (
    <div className="song-card">
      <button
        className="song-play"
        onClick={() => {
          loadTrack(artist, release, track);
        }}
      >
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
          {artist.map((artist, index) => (
            <Link
              onClick={() => getArtist(artist.id)}
              key={index}
              className="song-link"
              to={`../../../artist/${artist.name}`}
            >
              <>{artist.name}</>
            </Link>
          ))}
        </div>

        <div className="song-text">
          {artist.map((artist, index) => (
            <Link
              onClick={() => {
                getArtist(artist.id);
                setCurrentRelease(release.id);
              }}
              key={index}
              className="song-link"
              to={`../../../artist/${artist.name}/${release.title}}`}
            >
              {release.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="song-icons">
        <span className="song-text-time">{track.length}</span>

        {liked ? (
          <button
            className="song-heart-btn"
            onClick={(e) => {
              if (onClick) {
                onClick();
              }
              setLiked(!liked);
              removeTrack("track", artist[0].id, release.id, track.id);
            }}
          >
            <FaHeartBroken className="song-icon" />
          </button>
        ) : (
          <button
            className="song-heart-btn"
            onClick={(e) => {
              setLiked(!liked);
              addTrack("track", {
                artist: artist[0].id,
                album: release.id,
                track: track.id,
              });
            }}
          >
            <FaHeart className="song-icon" />
          </button>
        )}
        {added ? (
          <button
            onClick={() => {
              setAdded(!added);
              removeTrack("playlist", artist[0].id, release.id, track.id);
            }}
          >
            <FaMinus className="song-icon" />
          </button>
        ) : (
          <button
            onClick={() => {
              setAdded(!added);
              addTrack("playlist", {
                artist: artist[0].id,
                album: release.id,
                track: track.id,
              });
            }}
          >
            <FaPlus className="song-icon" />
          </button>
        )}

        {/* <button
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
        </button> */}
      </div>
    </div>
  );
}

export default SongCard;
