import "./AlbumCard.css";

function AlbumCard(album_name, artist, url) {
  return (
    <div class="AlbumCard">
      <img src={url} alt="Album" />
      <h2> {album_name} </h2>
      <h3> {artist} - 2022 </h3>
    </div>
  );
}

export default AlbumCard;
