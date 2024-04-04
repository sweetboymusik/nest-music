import "./SongCard.css";

import { useState } from "react";
import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import tempImage from "../../assets/images/album_placeholder.png";

function SongCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="song-card">
      <img src={tempImage} alt="" className="song-image" />
      <div className="song-info">
        <span className="song-text">
          <b>Title</b>
        </span>
        <span className="song-text">Artist</span>
        <span className="song-text">Album - YEAR</span>
      </div>
      <div className="song-icons">
        <button 
          className="song-heart-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? <FaHeart className="song-icon liked" /> : isHovered ? <FaHeart className="song-icon" /> : <FaRegHeart className="song-icon" />}
        </button>
        <button>
          <FaPlus className="song-icon" />
        </button>
      </div>
    </div>
  );
}

export default SongCard;



// import { useState } from "react";
// import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa6";
// import tempImage from "../../assets/images/album_placeholder.png";

// function SongCard() {
//   let [hovered, setHoverd] = useState(false);

//   return (
//     <div className="song-card">
//       <img src={tempImage} alt="" className="song-image" />
//       <div className="song-info">
//         <span className="song-text">
//           <b>Title</b>
//         </span>
//         <span className="song-text">Artist</span>
//         <span className="song-text">Album - YEAR</span>
//       </div>
//       <div className="song-icons">
//         <button className="song-heart-btn">
//           <FaRegHeart className="song-icon" />
//         </button>
//         <button>
//           <FaPlus className="song-icon" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SongCard;