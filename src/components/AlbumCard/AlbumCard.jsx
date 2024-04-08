import "./AlbumCard.css";
import { Link } from "react-router-dom";

function AlbumCard({ artist, release }) {
  return (
    <div className="AlbumCard">
      <Link
        className="AlbumCard-Link"
        to={`artists/${artist.name}/${release.title}}`}
      >
        <img
          src={require(`../../assets/images/artwork/${release.artwork}`)}
          alt="Album"
          className="AlbumCard-Image"
        />
      </Link>
      <div className="AlbumCard-Text">
        <Link
          className="AlbumCard-Link"
          to={`artists/${artist.name}/${release.title}}`}
        >
          <span className="AlbumCard-Text-Title">{release.title}</span>
        </Link>
        <Link className="AlbumCard-Link" to={`artists/${artist.name}`}>
          <span>{artist.name}</span>
        </Link>
      </div>
    </div>
  );
}
export default AlbumCard;
