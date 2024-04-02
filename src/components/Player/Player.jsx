import "./Player.css";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerVolume from "../PlayerVolume/PlayerVolume";

function Player() {
  return (
    <footer className="player">
      <PlayerControls />
      <PlayerVolume />
    </footer>
  );
}

export default Player;
