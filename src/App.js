import "./App.css";
import testSound from "./assets/tracks/album1track1.mp3";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Player from "./components/Player/Player";
import PageBrowse from "./components/PageBrowse/PageBrowse";
import PageHome from "./components/PageHome/PageHome";
import PageArtists from "./components/PageArtists/PageArtists";
import PageAlbums from "./components/PageAlbums/PageAlbums";
import PageArtist from "./components/PageArtist/PageArtist";
import SongSection from "./components/SongSection/SongSection";

function App() {
  let [audio, setAudio] = useState(document.createElement("audio"));
  let [playing, setPlaying] = useState(!audio.paused);
  let [volume, setVolume] = useState(1);
  let [position, setPosition] = useState();

  let [artists, setArtists] = useState([]);
  let [currentArtist, setCurrentArtist] = useState([]);

  async function fetchArtists() {
    let res = await fetch("http://localhost:4999/artists");
    let data = await res.json();
    return data;
  }

  async function fetchArtist(id) {
    let res = await fetch(`http://localhost:4999/artists/${id}`);
    let data = await res.json();
    return data;
  }

  async function getArtist(id) {
    let res = await fetchArtist(id);
    setCurrentArtist([res]);
  }

  function loadTrack() {
    audio.src = testSound;
    togglePlay();
  }

  function changeVolume(e) {
    if (e.target.classList.contains("volume-btn-min")) {
      setVolume(0);
      document.querySelector(".volume-base").value = 0;
    }

    if (e.target.classList.contains("volume-btn-max")) {
      setVolume(1);
      document.querySelector(".volume-base").value = 100;
    }

    if (e.target.classList.contains("volume-base")) {
      setVolume(parseInt(e.target.value) / 100);
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
    console.log(audio.volume);
  }, [volume]);

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

  // generate random artist cards
  const shuffled = artists.toSorted(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 3);
  const albumShuffled = artists.toSorted(() => 0.5 - Math.random());
  let albumSelected = albumShuffled.slice(0, 5);

  return (
    <Router>
      <div className="app">
        <NavBar />

        <div className="content-container">
          <Routes>
            <Route
              path="/home"
              element={
                <PageHome
                  getArtist={getArtist}
                  artists={artists}
                  shuffled={selected}
                  albumShuffled={albumSelected}
                />
              }
            />

            <Route path="/browse" element={<PageBrowse />}></Route>

            <Route
              path="/artist/:artist"
              element={
                <PageArtist
                  currentArtist={currentArtist}
                  getArtist={getArtist}
                />
              }
            ></Route>

            <Route
              path="/artist/:artists/:album"
              element={
                <PageArtist
                  currentArtist={currentArtist}
                  getArtist={getArtist}
                />
              }
            ></Route>

            <Route
              path="/library/artists"
              element={<PageArtists artists={artists} getArtist={getArtist} />}
            ></Route>

            <Route
              path="/library/albums"
              element={<PageAlbums artists={artists} getArtist={getArtist} />}
            ></Route>

            <Route
              path="/library/songs"
              element={<SongSection artists={artists} />}
            ></Route>

            <Route
              path="library/playlist"
            ></Route>
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
