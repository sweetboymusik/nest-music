import React from "react";
import { useState, useEffect } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageArtist({ artist }) {
  // gets artist for PageArtist
  let [artist, setArtist] = useState();
  function GetArtist(name) {
    let result = artists.filter((artist) => artist.name === name);
    setArtist(result);
    console.log(artist);
  }
  useState(() => {
    GetArtist("Amara");
  }, [artists]);
  useState(() => {
    console.log("hello");
  }, [artist]);
  return (
    <div>
      <AlbumGrid artists={artist} />
    </div>
  );
}

export default PageArtist;
