import React from "react";
import "./AlbumHeader.css";

import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import albumPlaceholder from "../../assets/images/other/album_placeholder.png";
import { useState, useEffect, useRef } from "react";

function AlbumHeader({ currentArtist, currentRelease, addAlbum, removeAlbum }) {
  const isMounted = useRef(false);

  let [liked, setLiked] = useState();
  let [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log(
        "artist on album page",
        currentArtist[0].releases.filter(
          (release) => release.id === currentRelease
        )[0].liked
      );
      setLiked(
        currentArtist[0].releases.filter(
          (release) => release.id === currentRelease
        )[0].liked
      );
      setCanRender(true);
    } else {
      isMounted.current = true;
    }
  }, [currentArtist]);

  if (canRender) {
    return (
      <div className="AlbumHeader">
        {currentArtist.map((artist, index) =>
          artist.releases.map(
            (release) =>
              release.id === currentRelease && (
                <img
                  key={index}
                  className="AlbumHeaderImg"
                  src={require(`../../assets/images/artwork/${release.artwork}`)}
                ></img>
              )
          )
        )}

        {currentArtist.map((artist) =>
          artist.releases.map(
            (release, i) =>
              release.id === currentRelease && (
                <span key={i}>
                  {liked ? (
                    <button
                      onClick={() => {
                        setLiked(!liked);
                        removeAlbum(currentArtist[0].id, currentRelease);
                      }}
                    >
                      UNLIKE
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setLiked(!liked);
                        addAlbum({
                          artist: currentArtist[0].id,
                          album: currentRelease,
                        });
                      }}
                    >
                      LIKE
                    </button>
                  )}
                </span>
              )
          )
        )}

        <div className="AlbumHeaderContent">
          {currentArtist.map((artist, index) => (
            <h3 key={index} className="AlbumHeaderArtist">
              {artist.name}
            </h3>
          ))}

          {currentArtist.map((artist, index) =>
            artist.releases.map(
              (release) =>
                release.id === currentRelease && (
                  <h1 key={index} className="AlbumHeaderTitle">
                    {release.title}
                  </h1>
                )
            )
          )}

          <div className="AlbumHeaderDetails">
            {currentArtist.map((artist) =>
              artist.releases.map(
                (release, index) =>
                  release.id === currentRelease && (
                    <span key={index}>
                      <b>{release.tracks.length} tracks</b>
                    </span>
                  )
              )
            )}

            <div className="AlbumHeaderIcons">
              <FaHeart />
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default AlbumHeader;
