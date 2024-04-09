import "./PageBrowseGenre.css";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import FeaturedSongs from "../FeaturedSongs/FeaturedSongs";

function PageBrowseGenre({
  artists,
  getArtist,
  setCurrentRelease,
  loadTrack,
  featured,
}) {
  return (
    <div>
      <AlbumGrid
        artists={artists}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
        loadTrack={loadTrack}
      />
      <FeaturedSongs
        featured={featured}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
    </div>
  );
}

export default PageBrowseGenre;
