import "./PlayerInfo.css";
import albumPlaceholder from "../../assets/images/other/album_placeholder.png";

function PlayerInfo({ info }) {
  return (
    <div className="player-info">
      <img src={info.artwork} alt="" />

      <div className="player-info-text">
        <h3>{info.title}</h3>
        <h4>{info.artist}</h4>
      </div>
    </div>
  );
}

PlayerInfo.defaultProps = {
  info: {
    artwork: "albumPlaceholder",
    title: "-",
    artist: "-",
  },
};

export default PlayerInfo;
