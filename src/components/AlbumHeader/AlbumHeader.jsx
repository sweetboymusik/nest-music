import React from "react";
import "./AlbumHeader.css";

import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function AlbumHeader({
  currentArtist,
  currentRelease,
  addAlbum,
  removeAlbum,
  getArtist,
  setCurrentRelease,
}) {
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

        <div className="AlbumHeaderContent">
          {currentArtist.map((artist, index) => (
            <Link
              className="AlbumHeader-Link"
              onClick={() => getArtist(artist.id)}
              key={index}
              to={`../../../artist/${artist.name}`}
            >
              <h3 className="AlbumHeaderArtist">{artist.name}</h3>
            </Link>
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
              {currentArtist.map((artist) =>
                artist.releases.map(
                  (release, i) =>
                    release.id === currentRelease && (
                      <span key={i}>
                        {liked ? (
                          <button
                            className="AlbumHeader-Btn"
                            onClick={() => {
                              setLiked(!liked);
                              removeAlbum(currentArtist[0].id, currentRelease);
                            }}
                          >
                            <FaHeart className="AlbumHeader-Heart-Full" />
                          </button>
                        ) : (
                          <button
                            className="AlbumHeader-Btn"
                            onClick={() => {
                              setLiked(!liked);
                              addAlbum({
                                artist: currentArtist[0].id,
                                album: currentRelease,
                              });
                            }}
                          >
                            <FaRegHeart className="AlbumHeader-Heart-Empty" />
                          </button>
                        )}
                      </span>
                    )
                )
              )}
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
