import React from 'react'

import ArtistGrid from '../ArtistGrid/ArtistGrid'

function PageArtists({artists}) {
  return (
    <div><ArtistGrid artists={artists}/></div>
  )
}

export default PageArtists