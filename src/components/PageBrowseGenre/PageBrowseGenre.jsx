// renders a genre browsing page, including an album grid and featured songs

import "./PageBrowseGenre.css";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import FeaturedSongs from "../FeaturedSongs/FeaturedSongs";

function PageBrowseGenre({
  artists,
  getArtist,
  setCurrentRelease,
  loadTrack,
  featured,
  addTrack,
  removeTrack,
}) {
  return (
    <div className="page-browse-genre">
      <header>
        <h2>{artists[0].genre}</h2>
        <hr className="home-divider" />
      </header>

      <div className="genre-featured-songs">
        <div className="genre-featured-left">
          <span>Featured Songs</span>
        </div>
        <FeaturedSongs
          featured={featured}
          loadTrack={loadTrack}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
          addTrack={addTrack}
          removeTrack={removeTrack}
        />
      </div>
      <AlbumGrid
        artists={artists}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
        loadTrack={loadTrack}
      />
    </div>
  );
}

export default PageBrowseGenre;
