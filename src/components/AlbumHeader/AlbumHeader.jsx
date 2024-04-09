import React from "react";
import "./AlbumHeader.css";

import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import albumPlaceholder from "../../assets/images/other/album_placeholder.png";

function AlbumHeader({ currentArtist, currentRelease }) {
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
}

export default AlbumHeader;
