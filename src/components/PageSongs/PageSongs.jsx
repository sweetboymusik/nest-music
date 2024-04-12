import "./PageSongs.css";
import MySongsGrid from "../MySongsGrid/MySongsGrid";
import SongHeader from "../SongHeader/SongHeader";
import EmptyListCard from "../EmptyListCard/EmptyListCard";

function PageSongs({
  title,
  image,
  userTracks,
  getArtist,
  loadTrack,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  return (
    <div className="page-songs">
      <SongHeader title={title} tracks={userTracks.length} image={image} />
      {userTracks.length > 0 ? (
        <MySongsGrid
          width={"100%"}
          userTracks={userTracks}
          loadTrack={loadTrack}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
          addTrack={addTrack}
          removeTrack={removeTrack}
        />
      ) : (
        <EmptyListCard />
      )}
    </div>
  );
}

export default PageSongs;
