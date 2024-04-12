import "./AlbumCard.css";
import { Link } from "react-router-dom";

function AlbumCard({ artist, release, getArtist, setCurrentRelease }) {
  return (
    <div className="AlbumCard">
      <Link
        onClick={() => {
          getArtist(artist.id);
          setCurrentRelease(release.id);
        }}
        className="AlbumCard-Link"
        to={`../../../artist/${artist.name}/${release.title}}`}
      >
        <img
          src={require(`../../assets/images/artwork/${release.artwork}`)}
          alt={`${release.name} Album Artwork`}
          className="AlbumCard-Image"
        />
      </Link>

      <div className="AlbumCard-Text">
        <Link
          onClick={() => {
            getArtist(artist.id);
            setCurrentRelease(release.id);
          }}
          className="AlbumCard-Link"
          to={`../../../artist/${artist.name}/${release.title}}`}
        >
          <span className="AlbumCard-Text-Title">{release.title}</span>
        </Link>

        <Link
          onClick={() => {
            getArtist(artist.id);
          }}
          className="AlbumCard-Link"
          to={`../../../artist/${artist.name}`}
        >
          <span>{artist.name}</span>
        </Link>
      </div>
    </div>
  );
}
export default AlbumCard;
