import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Player from "./components/Player/Player";

function App() {
  // state for audio player
  let [playing, setPlaying] = useState(true);
  let [volume, setVolume] = useState(100);

  function changeVolume(e) {
    console.log(e.target);

    if (e.target.classList.contains("volume-btn-min")) {
      setVolume(0);
    }

    if (e.target.classList.contains("volume-btn-max")) {
      setVolume(100);
    }
  }

  function togglePlay() {
    setPlaying(!playing);
  }

  return (
    <Router>
      <div className="app">
        <NavBar />

        <div className="content-container">
          <Routes>
            <Route
              path="/home"
              element={
                <div>
                  <h1>Title</h1>
                </div>
              }
            />
            <Route path="/browse"></Route>
            <Route paty="/library"></Route>
          </Routes>
        </div>

        <Player
          playing={playing}
          volume={volume}
          changeVolume={changeVolume}
          togglePlay={togglePlay}
        />
      </div>
    </Router>
  );
}

export default App;
