import "./PlayerVolume.css";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";

function PlayerVolume() {
  return (
    <div className="player-volume">
      <FaVolumeOff />
      <hr />
      <FaVolumeUp />
    </div>
  );
}

export default PlayerVolume;
