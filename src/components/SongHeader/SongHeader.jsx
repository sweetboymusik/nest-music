import { FaHeart, FaPlus } from "react-icons/fa6";
function SongHeader({ title, tracks, image }) {
  return (
    <div className="AlbumHeader">
      <img
        className="AlbumHeaderImg"
        src={require(`../../assets/images/playlists/${image}`)}
        alt={`${title} Header Album Artwork`}
      ></img>

      <div className="AlbumHeaderContent">
        <h3 className="AlbumHeaderArtist">Playlist</h3>

        <h1 className="AlbumHeaderTitle">{title}</h1>

        <span>
          <b>{tracks} tracks</b>
        </span>
      </div>
    </div>
  );
}

export default SongHeader;
