import "./PlayerControls.css";
import { FaPlay } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";

function PlayerControls() {
  return (
    <div className="player-controls">
      <div className="player-buttons">
        <IoPlayBack className="player-seek" />
        <button>
          <FaPlay className="player-play" />
        </button>
        <IoPlayForward className="player-seek" />
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
