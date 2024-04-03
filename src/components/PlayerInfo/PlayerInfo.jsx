import "./PlayerInfo.css";
function PlayerInfo() {
  return (
    <div className="player-info">
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="player-info-text">
        <h3>Song Name</h3>
        <h4>Artist Name</h4>
      </div>
    </div>
  );
}

export default PlayerInfo;
