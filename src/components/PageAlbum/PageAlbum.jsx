import "./PageAlbum.css";
import AlbumHeader from "../AlbumHeader/AlbumHeader";
import SongGrid from "../SongGrid/SongGrid";

function PageAlbum({ currentArtist, currentRelease, loadTrack }) {
  return (
    <div className="page-album">
      <AlbumHeader
        currentArtist={currentArtist}
        currentRelease={currentRelease}
      />
      <SongGrid
        currentArtist={currentArtist}
        currentRelease={currentRelease}
        loadTrack={loadTrack}
      />
    </div>
  );
}

export default PageAlbum;
