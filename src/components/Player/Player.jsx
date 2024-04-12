import "./Player.css";

import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

function Player({
  playing,
  volume,
  changeVolume,
  changePosition,
  togglePlay,
  currentTrack,
  position,
}) {
  return (
    <footer className="player">
      <PlayerInfo info={currentTrack} />
      <PlayerControls
        playing={playing}
        togglePlay={togglePlay}
        changePosition={changePosition}
        currentTrack={currentTrack}
        position={position}
      />
      <PlayerVolume volume={volume} changeVolume={changeVolume} />
    </footer>
  );
}

export default Player;
