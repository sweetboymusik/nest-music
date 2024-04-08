import React from "react";
import { useState, useEffect } from "react";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageArtist({ artist }) {
  return (
    <div>
      <AlbumGrid artists={artist} />
    </div>
  );
}

export default PageArtist;
