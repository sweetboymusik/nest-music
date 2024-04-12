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
  addTrack,
  removeTrack,
}) {
  return (
    <div className="page-album">
      <AlbumHeader
        currentArtist={currentArtist}
        currentRelease={currentRelease}
        addAlbum={addAlbum}
        removeAlbum={removeAlbum}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
      />
      <SongGrid
        width={"100%"}
        currentArtist={currentArtist}
        currentRelease={currentRelease}
        loadTrack={loadTrack}
        getArtist={getArtist}
        setCurrentRelease={setCurrentRelease}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
}

export default PageAlbum;
