import "./PlayerControls.css";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";

function PlayerControls({
  playing,
  togglePlay,
  changePosition,
  currentTrack,
  position,
}) {
  return (
    <div data-testid="21343" className="player-controls">
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

        <div className="position-slider">
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            className="position-base"
            onChange={changePosition}
          />
        </div>

        <button onClick={changePosition} className="pos-btn-end">
          {currentTrack.length || "0:00"}
        </button>
      </div>
    </div>
  );
}

export default PlayerControls;
