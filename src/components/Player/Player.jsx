import "./Player.css";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

function Player() {
  return (
    <footer className="player">
      <PlayerInfo />
      <PlayerControls />
      <PlayerVolume />
    </footer>
  );
}

export default Player;
