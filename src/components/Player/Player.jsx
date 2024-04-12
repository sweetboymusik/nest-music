import "./Player.css";
import { useState } from "react";

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
}) {
  return (
    <footer data-testid="21343" className="player">
      <PlayerInfo info={currentTrack} />
      <PlayerControls
        playing={playing}
        togglePlay={togglePlay}
        changePosition={changePosition}
        currentTrack={currentTrack}
      />
      <PlayerVolume volume={volume} changeVolume={changeVolume} />
    </footer>
  );
}

export default Player;
