import "./App.css";
import testSound from "./assets/tracks/album1track1.mp3";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Player from "./components/Player/Player";

function App() {
  let [audio, setAudio] = useState(document.createElement("audio"));
  let [playing, setPlaying] = useState(!audio.paused);
  let [volume, setVolume] = useState(1);
  let [position, setPosition] = useState();

  let [artists, setArtists] = useState([]);

  async function fetchArtists() {
    let res = await fetch("http://localhost:4999/artists");
    let data = await res.json();
    return data;
  }

  function loadTrack() {
    audio.src = testSound;
    togglePlay();
  }

  function changeVolume(e) {
    if (e.target.classList.contains("volume-btn-min")) {
      setVolume(0);
    }

    if (e.target.classList.contains("volume-btn-max")) {
      setVolume(1);
    }

    if (e.target.classList.contains("volume-btn-inc")) {
      const id = parseInt(e.target.id.split("-")[1]);
      setVolume(id / 10);
    }
  }

  function changePosition(e) {
    if (e.target.classList.contains("pos-btn-start")) {
      audio.currentTime = 0;
      setPosition(audio.currentTime);
    }

    if (e.target.classList.contains("pos-btn-end")) {
      audio.currentTime = audio.duration - 1;
      setPosition(audio.currentTime);
    }
  }

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  // useEffect(() => {
  //   audio.currentTime = 10;
  // }, [position]);

  useEffect(() => {
    const getArtists = async () => {
      const artistsFromServer = await fetchArtists();
      setArtists(artistsFromServer);
    };

    getArtists();
  }, []);

  function togglePlay() {
    if (audio.src !== "") {
      audio.paused ? audio.play() : audio.pause();
      setPlaying(!audio.paused);
    }
  }

  audio.onended = function () {
    setPlaying(false);
  };

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
                  <button onClick={loadTrack}>Load Track</button>
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
          changePosition={changePosition}
          togglePlay={togglePlay}
        />
      </div>
    </Router>
  );
}

export default App;
