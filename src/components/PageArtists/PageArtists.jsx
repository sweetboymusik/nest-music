// renders a grid of artists

import "./PageArtists.css";
import ArtistGrid from "../ArtistGrid/ArtistGrid";
import EmptyListCard from "../EmptyListCard/EmptyListCard";

function PageArtists({ artists, getArtist }) {
  return (
    <div className="page-artists">
      <h2>Library/Artists</h2>
      <hr className="home-divider" />
      {artists.length < 1 ? (
        <EmptyListCard />
      ) : (
        <ArtistGrid artists={artists} getArtist={getArtist} />
      )}
    </div>
  );
}

export default PageArtists;
