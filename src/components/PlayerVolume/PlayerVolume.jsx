import "./PlayerVolume.css";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";

function PlayerVolume({ volume, changeVolume }) {
  return (
    <div className="player-volume">
      <button className="volume-btn-min" onClick={changeVolume}>
        <FaVolumeOff />
      </button>

      <div className="volume-slider">
        <hr className="volume-base" />
        <hr className="volume-position" style={{ width: `${volume}%` }} />
      </div>

      <button className="volume-btn-max" onClick={changeVolume}>
        <FaVolumeUp />
      </button>
    </div>
  );
}

export default PlayerVolume;
