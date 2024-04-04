import "./PlayerVolume.css";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";

function PlayerVolume({ volume, changeVolume }) {
  return (
    <div className="player-volume">
      <button className="volume-btn-min" onClick={changeVolume}>
        <FaVolumeOff pointerEvents={"none"} />
      </button>

      <div className="volume-slider">
        <input
          type="range"
          min="0"
          max="100"
          className="volume-base"
          onChange={changeVolume}
        />
      </div>

      <button className="volume-btn-max" onClick={changeVolume}>
        <FaVolumeUp pointerEvents={"none"} />
      </button>
    </div>
  );
}

export default PlayerVolume;
