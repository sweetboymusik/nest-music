import "./UserAlbumGrid.css";
import AlbumCard from "../AlbumCard/AlbumCard";

function UserAlbumGrid({
  userAlbums,
  getArtist,
  setCurrentRelease,
  loadTrack,
}) {
  return (
    <div className="album-grid">
      {userAlbums.map((album) => (
        <AlbumCard
          key={album.release.id}
          artist={album.artist}
          release={album.release}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
          loadTrack={loadTrack}
        />
      ))}
    </div>
  );
}

export default UserAlbumGrid;
