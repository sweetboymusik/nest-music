import "./PlayerVolume.css";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";

function PlayerVolume() {
  return (
    <div className="player-volume">
      <button>
        <FaVolumeOff />
      </button>

      <hr />

      <button>
        <FaVolumeUp />
      </button>
    </div>
  );
}

export default PlayerVolume;
