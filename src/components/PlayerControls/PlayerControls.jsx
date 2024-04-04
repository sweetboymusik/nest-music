import "./PlayerControls.css";
import PlayerPositionButtons from "../PlayerPositionButtons/PlayerPositionButtons";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";

function PlayerControls({ playing, togglePlay, changePosition }) {
  return (
    <div className="player-controls">
      <div className="player-buttons">
        <button>
          <IoPlayBack className="player-seek seek-start" />
        </button>

        <button onClick={togglePlay}>
          {playing ? (
            <FaPause className="player-pause" />
          ) : (
            <FaPlay className="player-play" />
          )}
        </button>

        <button>
          <IoPlayForward className="player-seek seek-end" />
        </button>
      </div>

      <div className="player-timeline">
        <button onClick={changePosition} className="pos-btn-start">
          0:00
        </button>
        <PlayerPositionButtons changePosition={changePosition} />
        <button onClick={changePosition} className="pos-btn-end">
          3:41
        </button>
      </div>
    </div>
  );
}

export default PlayerControls;
