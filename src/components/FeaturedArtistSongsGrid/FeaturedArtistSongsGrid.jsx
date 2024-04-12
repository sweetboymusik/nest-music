import SongCard from "../SongCard/SongCard";

function FeaturedArtistSongsGrid({
  artist,
  loadTrack,
  getArtist,
  setCurrentRelease,
  addTrack,
  removeTrack,
}) {
  console.log(artist);
  return (
    <div>
      {artist.map((artst) =>
        artst.releases.map((release, index) => (
          <SongCard
            key={index}
            artist={artist}
            release={release}
            track={release.tracks[0]}
            loadTrack={loadTrack}
            getArtist={getArtist}
            setCurrentRelease={setCurrentRelease}
            addTrack={addTrack}
            removeTrack={removeTrack}
          />
        ))
      )}
    </div>
  );
}

export default FeaturedArtistSongsGrid;
