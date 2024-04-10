import "./PageHome.css";

import ArtistGrid from "../ArtistGrid/ArtistGrid";
import PlaylistGrid from "../PlaylistGrid/PlaylistGrid";
import AlbumGrid from "../AlbumGrid/AlbumGrid";

function PageHome({
  artists,
  shuffled,
  albumShuffled,
  getArtist,
  setCurrentRelease,
  loadTrack,
  addArtist,
  removeArtist,
}) {
  return (
    <div className="home-page">
      <button
        onClick={() => {
          addArtist({ artist: "a0001" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          removeArtist("a0001");
        }}
      >
        delete
      </button>
      <div className="home-section">
        <h1>Featured Artists</h1>
        <hr className="home-divider" />
        <ArtistGrid
          artists={shuffled}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
        />
      </div>

      <div className="home-section">
        <h1>Playlists</h1>
        <hr className="home-divider" />
        <PlaylistGrid />
      </div>

      <div className="home-section">
        <h1>Featured Albums</h1>
        <hr className="home-divider" />
        <AlbumGrid
          artists={albumShuffled}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
          loadTrack={loadTrack}
        />
      </div>
    </div>
  );
}

export default PageHome;
