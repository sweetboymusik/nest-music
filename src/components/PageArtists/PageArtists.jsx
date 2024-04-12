// renders a grid of artists

import ArtistGrid from "../ArtistGrid/ArtistGrid";

function PageArtists({ artists, getArtist }) {
  return (
    <div>
      <ArtistGrid artists={artists} getArtist={getArtist} />
    </div>
  );
}

export default PageArtists;
