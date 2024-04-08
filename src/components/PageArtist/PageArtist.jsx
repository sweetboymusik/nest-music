import React from 'react'
import { useState, useEffect } from 'react';

import AlbumGrid from "../AlbumGrid/AlbumGrid";


function PageArtist({artists, name}) {
  let [artist, setArtist] = useState()

  function GetArtist() {
    let result = artists.filter((artist) => 
      artist.name === name 
    )
    setArtist(result) 
    console.log(artist)
  }
  useEffect(() => {GetArtist()}, [])

  return (
    <div>
      
      <AlbumGrid artists={artist}/>

    </div>
  )
}

export default PageArtist