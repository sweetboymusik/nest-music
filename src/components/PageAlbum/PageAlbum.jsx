import "./PageAlbum.css";
import AlbumHeader from "../AlbumHeader/AlbumHeader";
import SongGrid from "../SongGrid/SongGrid";

function PageAlbum({
  currentArtist,
  currentRelease,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addAlbum,
  removeAlbum,
}) {
  return (
    <div className="page-album">
      <AlbumHeader
        currentArtist={currentArtist}
        currentRelease={currentRelease}
        addAlbum={addAlbum}
        removeAlbum={removeAlbum}
      />
      <SongGrid
        currentArtist={currentArtist}
        currentRelease={currentRelease}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
    </div>
  );
}

export default PageAlbum;
