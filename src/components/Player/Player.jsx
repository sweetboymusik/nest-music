import "./Player.css";
import { useState } from "react";

import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

function Player({ playing, volume, changeVolume, changePosition, togglePlay }) {
  return (
    <footer className="player">
      <PlayerInfo />
      <PlayerControls
        playing={playing}
        togglePlay={togglePlay}
        changePosition={changePosition}
      />
      <PlayerVolume volume={volume} changeVolume={changeVolume} />
    </footer>
  );
}

export default Player;
