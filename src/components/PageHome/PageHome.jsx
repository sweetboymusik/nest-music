import "./PageHome.css";

import ArtistGrid from "../ArtistGrid/ArtistGrid";
import PlaylistGrid from "../PlaylistGrid/PlaylistGrid";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageHome({ artists, shuffled, albumShuffled, getArtist }) {
  return (
    <div className="home-page">
      <div className="home-section">
        <h1>Featured Artists</h1>
        <hr className="home-divider" />
        <ArtistGrid artists={shuffled} getArtist={getArtist} />
      </div>

      <div className="home-section">
        <h1>Playlists</h1>
        <hr className="home-divider" />
        <PlaylistGrid />
      </div>

      <div className="home-section">
        <h1>Featured Albums</h1>
        <hr className="home-divider" />
        <AlbumGrid artists={albumShuffled} getArtist={getArtist} />
      </div>
    </div>
  );
}

export default PageHome;
