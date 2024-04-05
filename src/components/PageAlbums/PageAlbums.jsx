import React from 'react'
import AlbumGrid from '../AlbumGrid/AlbumGrid'

function PageAlbums({artists}) {
  return (
    <div><AlbumGrid artists={artists}/></div>
  )
}

export default PageAlbums