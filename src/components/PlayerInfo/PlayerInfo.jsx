import "./PlayerInfo.css";

function PlayerInfo({ info }) {
  return (
    <div className="player-info">
      <img
        src={require(`../../assets/images/artwork/${info.artwork}`)}
        alt="Player Info Artwork"
      />

      <div className="player-info-text">
        <h3>{info.title}</h3>
        <h4>{info.artist}</h4>
      </div>
    </div>
  );
}

export default PlayerInfo;
