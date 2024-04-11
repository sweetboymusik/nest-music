import React from "react";
import { useState, useEffect, useRef } from "react";

import AlbumGrid from "../AlbumGrid/AlbumGrid";
import SongGrid from "../SongGrid/SongGrid";

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
          {currentArtist.map((artist, index) => (
            <div key={index} className="artist-header-text">
              {artist.name}
            </div>
          ))}
        </div>

        {currentArtist.map((artist, index) => (
          <span key={index}>
            {liked ? (
              <button
                onClick={() => {
                  setLiked(!liked);
                  removeArtist(currentArtist[0].id);
                }}
              >
                UNLIKE
              </button>
            ) : (
              <button
                onClick={() => {
                  setLiked(!liked);
                  addArtist({ artist: currentArtist[0].id });
                }}
              >
                LIKE
              </button>
            )}
          </span>
        ))}

        <div className="artist-body">
          <div>
            Top Songs
            <SongGrid
              currentArtist={currentArtist}
              currentRelease={currentRelease}
              loadTrack={loadTrack}
              width={"1000px"}
            />
          </div>
          Discography
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
