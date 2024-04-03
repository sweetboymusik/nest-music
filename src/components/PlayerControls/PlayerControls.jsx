import "./PlayerControls.css";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";

function PlayerControls({ playing, togglePlay }) {
  return (
    <div className="player-controls">
      <div className="player-buttons">
        <button>
          <IoPlayBack className="player-seek" />
        </button>

        <button onClick={togglePlay}>
          {playing ? (
            <FaPause className="player-pause" />
          ) : (
            <FaPlay className="player-play" />
          )}
        </button>

        <button>
          <IoPlayForward className="player-seek" />
        </button>
      </div>

      <div className="player-timeline">
        <span>0:00</span>
        <hr />
        <span>3:41</span>
      </div>
    </div>
  );
}

export default PlayerControls;
