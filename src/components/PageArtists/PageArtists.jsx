import React from 'react'

import ArtistGrid from '../ArtistGrid/ArtistGrid'

function PageArtists({artists, GetArtist}) {
  return (
    <div><ArtistGrid artists={artists} GetArtist={GetArtist}/></div>
  )
}

export default PageArtists