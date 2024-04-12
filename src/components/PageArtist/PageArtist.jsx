import { useState, useEffect, useRef } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import SongGrid from "../SongGrid/SongGrid";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./PageArtist.css";

function PageArtist({
  currentArtist,
  getArtist,
  setCurrentRelease,
  currentRelease,
  loadTrack,
  addArtist,
  removeArtist,
}) {
  const isMounted = useRef(false);

  let [liked, setLiked] = useState();
  let [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (isMounted.current) {
      setLiked(currentArtist[0].liked);
      setCanRender(true);
    } else {
      isMounted.current = true;
    }
  }, [currentArtist]);

  if (canRender) {
    return (
      <div className="artist-main">
        <div className="artist-header">
          {currentArtist.map((artist, index) => (
            <img
              key={index}
              className="artist-header-img"
              src={require(`../../assets/images/artists/${artist.photo}`)}
              alt="artist image"
            />
          ))}

          <div className="artist-header-info">
            {currentArtist.map((artist, index) => (
              <h1 key={index} className="artist-header-text">
                {artist.name}
              </h1>
            ))}
            {currentArtist.map((artist, index) => (
              <span key={index}>
                {liked ? (
                  <button
                    className="artist-button"
                    onClick={() => {
                      setLiked(!liked);
                      removeArtist(currentArtist[0].id);
                    }}
                  >
                    <FaHeart className="artist-icon artist-liked" />
                  </button>
                ) : (
                  <button
                    className="artist-button"
                    onClick={() => {
                      setLiked(!liked);
                      addArtist({ artist: currentArtist[0].id });
                    }}
                  >
                    <FaRegHeart className="artist-icon artist-unliked" />
                  </button>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="artist-body">
          <h3>Discography</h3>
          <hr className="home-divider" />
          <AlbumGrid
            artists={currentArtist}
            getArtist={getArtist}
            setCurrentRelease={setCurrentRelease}
          />
        </div>
      </div>
    );
  } else {
    return <div>loading... </div>;
  }
}

export default PageArtist;
