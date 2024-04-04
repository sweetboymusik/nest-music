import "./PlayerVolume.css";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";

function PlayerVolume({ volume, changeVolume }) {
  return (
    <div className="player-volume">
      <button className="volume-btn-min" onClick={changeVolume}>
        <FaVolumeOff pointerEvents={"none"} />
      </button>

      <div className="volume-slider">
        <div className="volume-base">
          <button
            className="volume-btn-inc"
            id="vol-1"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-2"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-3"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-4"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-5"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-6"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-7"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-8"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-9"
            onClick={changeVolume}
          ></button>
          <button
            className="volume-btn-inc"
            id="vol-10"
            onClick={changeVolume}
          ></button>
        </div>
        <hr className="volume-position" style={{ width: `${volume * 100}%` }} />
      </div>

      <button className="volume-btn-max" onClick={changeVolume}>
        <FaVolumeUp pointerEvents={"none"} />
      </button>
    </div>
  );
}

export default PlayerVolume;
