// FINAL SPRINT (Winter Semester, S.Y. 2023-2024)
// Project Name: NEST/MUSIC (A Music Streaming Platform)
// Proponents: Elliott Butt, Zachary Hulan, Joseph Flores
// Date of Submission: 12 April 2024

import "./App.css";
import testSound from "./assets/tracks/album1track1.mp3";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Player from "./components/Player/Player";
import BrowseGenre from "./components/BrowseGenre/BrowseGenre";
import PageHome from "./components/PageHome/PageHome";
import PageArtists from "./components/PageArtists/PageArtists";
import PageAlbums from "./components/PageAlbums/PageAlbums";
import PageArtist from "./components/PageArtist/PageArtist";
import PageAlbum from "./components/PageAlbum/PageAlbum";
import PageBrowseGenre from "./components/PageBrowseGenre/PageBrowseGenre";
import PageSongs from "./components/PageSongs/PageSongs";
import PagePlaylist from "./components/PagePlaylist/PagePlaylist";

function App() {
  // state variables for audio playback
  let [audio, setAudio] = useState(document.createElement("audio"));
  let [playing, setPlaying] = useState(!audio.paused);
  let [volume, setVolume] = useState(0.5);
  let [position, setPosition] = useState();

  // state variables for catalog
  let [artists, setArtists] = useState([]);
  let [featured, setFeatured] = useState([]);
  let [filteredArtists, setFilteredArtists] = useState([]);
  let [currentArtist, setCurrentArtist] = useState([]);
  let [currentRelease, setCurrentRelease] = useState();
  let [currentTrack, setCurrentTrack] = useState({
    title: "-",
    artist: "-",
    artwork: "album_placeholder.png",
  });
  let [currentPlaylist, setCurrentPlaylist] = useState([]);
  let [currentPlaylistInfo, setCurrentPlaylistInfo] = useState([
    {
      id: "p0005",
      name: "Zen Zone",
      photo: "photo-zen_zone.jpg",
    },
  ]);

  // state variables for user lists (liking/saving artists/albums/tracks)
  let [userArtists, setUserArtists] = useState([]);
  let [userAlbums, setUserAlbums] = useState([]);
  let [userTracks, setUserTracks] = useState([]);
  let [userPlaylist, setUserPlaylist] = useState([]);
  let [filteredUserArtists, setFilteredUserArtists] = useState([]);
  let [filteredUserAlbums, setFilteredUserAlbums] = useState([]);
  let [filteredUserTracks, setFilteredUserTracks] = useState([]);
  let [filteredUserPlaylist, setFilteredUserPlaylist] = useState([]);
  let [filteredCurrentPlaylist, setFilteredCurrentPlaylist] = useState([]);

  // functions for adding/removing from user lists
  async function addArtist(artist) {
    const artistInfo = await fetchArtist(artist.artist);
    artistInfo.liked = true;

    await fetch(`http://localhost:4999/artists/${artist.artist}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistInfo),
    });

    let newData = await fetchArtists();
    setArtists(newData);

    const res = await fetch(`http://localhost:4999/userArtists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artist),
    });

    const data = await res.json();
    setUserArtists([...userArtists, data]);
  }

  async function removeArtist(id) {
    const artistInfo = await fetchArtist(id);
    artistInfo.liked = false;

    await fetch(`http://localhost:4999/artists/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistInfo),
    });

    let newData = await fetchArtists();
    setArtists(newData);

    let newID = userArtists.filter((entry) => entry.artist === id)[0].id;

    await fetch(`http://localhost:4999/userArtists/${newID}`, {
      method: "DELETE",
    });
    setUserArtists(userArtists.filter((item) => item.id !== newID));
  }

  async function addAlbum(album) {
    const artistInfo = await fetchArtist(album.artist);
    artistInfo.releases.forEach((release) => {
      if (release.id === album.album) {
        release.liked = true;
      }
    });

    await fetch(`http://localhost:4999/artists/${album.artist}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistInfo),
    });

    let newData = await fetchArtists();
    setArtists(newData);

    const res = await fetch(`http://localhost:4999/userAlbums`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(album),
    });

    const data = await res.json();
    setUserAlbums([...userAlbums, data]);
  }

  async function removeAlbum(artist, album) {
    const artistInfo = await fetchArtist(artist);
    artistInfo.releases.forEach((release) => {
      if (release.id === album) {
        release.liked = false;
      }
    });

    await fetch(`http://localhost:4999/artists/${artist}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistInfo),
    });

    let newData = await fetchArtists();
    setArtists(newData);

    let newID = userAlbums.filter((entry) => entry.album === album)[0].id;

    await fetch(`http://localhost:4999/userAlbums/${newID}`, {
      method: "DELETE",
    });

    setUserAlbums(userAlbums.filter((item) => item.id !== newID));
  }

  async function addTrack(type, track) {
    const artistInfo = await fetchArtist(track.artist);

    artistInfo.releases.forEach((release) => {
      if (release.id === track.album) {
        release.tracks.forEach((trk) => {
          if (trk.id === track.track) {
            if (type === "track") {
              trk.liked = true;
            }

            if (type === "playlist") {
              trk.added = true;
            }
          }
        });
      }
    });

    await fetch(`http://localhost:4999/artists/${track.artist}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistInfo),
    });

    let newData = await fetchArtists();
    setArtists(newData);

    if (type === "track") {
      const res = await fetch(`http://localhost:4999/userTracks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(track),
      });

      const data = await res.json();
      setUserTracks([...userTracks, data]);
    }

    if (type === "playlist") {
      const res = await fetch(`http://localhost:4999/userPlaylist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(track),
      });

      const data = await res.json();
      setUserPlaylist([...userPlaylist, data]);
    }
  }

  async function removeTrack(type, artist, album, track) {
    const artistInfo = await fetchArtist(artist);

    artistInfo.releases.forEach((release) => {
      if (release.id === album) {
        release.tracks.forEach((trk) => {
          if (trk.id === track) {
            if (type === "track") trk.liked = false;
            if (type === "playlist") trk.added = false;
          }
        });
      }
    });

    await fetch(`http://localhost:4999/artists/${artist}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistInfo),
    });

    let newData = await fetchArtists();
    setArtists(newData);

    if (type === "track") {
      let newID = userTracks.filter((entry) => entry.track === track)[0].id;

      await fetch(`http://localhost:4999/userTracks/${newID}`, {
        method: "DELETE",
      });

      setUserTracks(userTracks.filter((item) => item.id !== newID));
    }

    if (type === "playlist") {
      let newID = userPlaylist.filter((entry) => entry.track === track)[0].id;

      await fetch(`http://localhost:4999/userPlaylist/${newID}`, {
        method: "DELETE",
      });

      setUserPlaylist(userPlaylist.filter((item) => item.id !== newID));
    }
  }

  // useEffects for user lists
  useEffect(() => {
    async function getUserArtists() {
      const res = await fetchUserArtists();
      setUserArtists(res);
    }

    async function getUserAlbums() {
      const res = await fetchUserAlbums();
      setUserAlbums(res);
    }

    async function getUserTracks() {
      const res = await fetchUserTracks();
      setUserTracks(res);
    }

    async function getUserPlaylist() {
      const res = await fetchUserPlaylist();
      setUserPlaylist(res);
    }
    getUserArtists();
    getUserAlbums();
    getUserTracks();
    getUserPlaylist();
  }, []);

  async function getPlaylist(playlist) {
    const res = await fetchPlaylist(playlist);
    const info = await fetchPlaylistInfo(playlist);
    setCurrentPlaylist(res);
    setCurrentPlaylistInfo(info);
  }

  // filter functions
  function filterArtists(genre) {
    let filtered = artists.filter((artist) => artist.genre === genre);
    setFilteredArtists(filtered);
  }

  async function filterUserArtists() {
    let filtered = [];

    userArtists.forEach(async (entry) => {
      let result = await fetchArtist(entry.artist);
      filtered.push(result);
    });

    setFilteredUserArtists(filtered);
  }

  async function filterUserAlbums() {
    const filtered = [];

    userAlbums.forEach(async (entry) => {
      const artist = await fetchArtist(entry.artist);
      const release = await artist.releases.filter(
        (release) => release.id === entry.album
      );

      let obj = { artist: artist, release: release[0] };

      filtered.push(obj);
    });

    setFilteredUserAlbums(filtered);
  }

  async function filterUserTracks() {
    const filtered = await getFilteredUserTracks();
    setFilteredUserTracks(filtered);
  }

  async function getFilteredUserTracks() {
    let filtered = userTracks.map(async (entry) => {
      const artist = await fetchArtist(entry.artist);
      const release = await artist.releases.filter(
        (release) => release.id === entry.album
      );
      const track = await release[0].tracks.filter(
        (track) => track.id === entry.track
      );

      return { artist: [artist], release: release[0], track: track[0] };
    });

    return Promise.all(filtered);
  }

  async function filterCurrentPlaylist() {
    const filtered = await getFilteredCurrentPlaylist();
    setFilteredCurrentPlaylist(filtered);
  }

  async function getFilteredCurrentPlaylist() {
    let filtered = currentPlaylist.map(async (entry) => {
      const artist = await fetchArtist(entry.artist);
      const release = await artist.releases.filter(
        (release) => release.id === entry.album
      );
      const track = await release[0].tracks.filter(
        (track) => track.id === entry.track
      );

      return { artist: [artist], release: release[0], track: track[0] };
    });

    return Promise.all(filtered);
  }

  async function filterUserPlaylist() {
    const filtered = await getFilteredPlaylist();
    setFilteredUserPlaylist(filtered);
  }

  async function getFilteredPlaylist() {
    const filtered = userPlaylist.map(async (entry) => {
      const artist = await fetchArtist(entry.artist);
      const release = await artist.releases.filter(
        (release) => release.id === entry.album
      );
      const track = await release[0].tracks.filter(
        (track) => track.id === entry.track
      );

      return { artist: [artist], release: release[0], track: track[0] };
    });

    return Promise.all(filtered);
  }

  // useEffects for filtered lists
  useEffect(() => {
    filterUserArtists();
  }, [userArtists]);

  useEffect(() => {
    filterUserAlbums();
  }, [userAlbums]);

  useEffect(() => {
    filterUserTracks();
  }, [userTracks]);

  useEffect(() => {
    filterUserPlaylist();
  }, [userPlaylist]);

  useEffect(() => {
    filterCurrentPlaylist();
  }, [currentPlaylist]);

  // fetch functions
  async function fetchUserArtists() {
    const res = await fetch("http://localhost:4999/userArtists");
    const data = await res.json();
    return data;
  }

  async function fetchUserAlbums() {
    const res = await fetch("http://localhost:4999/userAlbums");
    const data = await res.json();
    return data;
  }

  async function fetchUserTracks() {
    const res = await fetch("http://localhost:4999/userTracks");
    const data = await res.json();
    return data;
  }

  async function fetchUserPlaylist() {
    const res = await fetch("http://localhost:4999/userPlaylist");
    const data = await res.json();
    return data;
  }

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

  async function fetchFeatured(genre) {
    let res = await fetchArtists();
    let filtered = res.filter((artist) => artist.genre === genre);

    let featured = filtered.map((artist) => {
      let obj = {
        artist: [artist],
        release: artist.releases[0],
        track: artist.releases[0].tracks[0],
      };

      return obj;
    });

    return featured;
  }

  async function fetchPlaylist(playlistname) {
    let name = playlistname.replace(/ /g, "");
    let res = await fetch(`http://localhost:4999/Playlist${name}`);
    let data = await res.json();
    return data;
  }

  async function fetchPlaylistInfo(playlistname) {
    let name = playlistname.replace(/ /g, "");
    let res = await fetch(`http://localhost:4999/playlists`);
    let data = await res.json();
    let result = data.filter((playlist) => playlist.name === playlistname);
    return result;
  }

  useEffect(() => {
    const getArtists = async () => {
      const artistsFromServer = await fetchArtists();
      setArtists(artistsFromServer);
    };

    getArtists();
  }, []);

  useEffect(() => {
    async function getFeatured() {
      let res = await fetchFeatured("Pop");
      setFeatured(res);
    }

    getFeatured();
  }, []);

  // audio playback functions and useEffects
  function loadTrack(artist, release, track) {
    setCurrentTrack({
      artist: artist[0].name,
      artwork: release.artwork,
      title: track.title,
      length: track.length,
    });

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

  function togglePlay() {
    if (audio.src !== "") {
      audio.paused ? audio.play() : audio.pause();
      setPlaying(!audio.paused);
    }
  }

  audio.onended = function () {
    setPlaying(false);
  };

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  // generate random artist cards
  const shuffled = artists.toSorted(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 3);
  const albumShuffled = artists.toSorted(() => 0.5 - Math.random());
  let albumSelected = albumShuffled.slice(0, 5);

  // render main application
  return (
    <Router>
      <div className="app">
        <NavBar />

        <div className="content-container">
          <Routes>
            {/* Add the following routes to the app */}
            <Route
              path="/"
              element={
                <PageHome
                  getArtist={getArtist}
                  artists={artists}
                  shuffled={selected}
                  albumShuffled={albumSelected}
                  setCurrentRelease={setCurrentRelease}
                  loadTrack={loadTrack}
                  addArtist={addArtist}
                  removeArtist={removeArtist}
                  getPlaylist={getPlaylist}
                />
              }
            />

            <Route
              path="/browse"
              element={<BrowseGenre filterArtists={filterArtists} />}
            ></Route>

            <Route
              path="/browse/:genre"
              element={
                <PageBrowseGenre
                  artists={filteredArtists}
                  getArtist={getArtist}
                  setCurrentRelease={setCurrentRelease}
                  loadTrack={loadTrack}
                  featured={featured}
                />
              }
            ></Route>

            <Route
              path="/artist/:artist"
              element={
                <PageArtist
                  currentArtist={currentArtist}
                  getArtist={getArtist}
                  setCurrentRelease={setCurrentRelease}
                  addArtist={addArtist}
                  removeArtist={removeArtist}
                  addTrack={addTrack}
                  removeTrack={removeTrack}
                  loadTrack={loadTrack}
                />
              }
            ></Route>

            <Route
              path="/artist/:artists/:album"
              element={
                <PageAlbum
                  currentArtist={currentArtist}
                  getArtist={getArtist}
                  currentRelease={currentRelease}
                  loadTrack={loadTrack}
                  setCurrentRelease={setCurrentRelease}
                  addAlbum={addAlbum}
                  removeAlbum={removeAlbum}
                  addTrack={addTrack}
                  removeTrack={removeTrack}
                />
              }
            ></Route>

            <Route
              path="/library/artists"
              element={
                <PageArtists
                  artists={filteredUserArtists}
                  getArtist={getArtist}
                />
              }
            ></Route>

            <Route
              path="/library/albums"
              element={
                <PageAlbums
                  userAlbums={filteredUserAlbums}
                  getArtist={getArtist}
                  setCurrentRelease={setCurrentRelease}
                />
              }
            ></Route>

            <Route
              path="/library/songs"
              element={
                <PageSongs
                  title="My Songs"
                  image="photo-liked_songs.jpg"
                  userTracks={filteredUserTracks}
                  getArtist={getArtist}
                  loadTrack={loadTrack}
                  setCurrentRelease={setCurrentRelease}
                  addTrack={addTrack}
                  removeTrack={removeTrack}
                />
              }
            ></Route>

            <Route
              path="library/playlist"
              element={
                <PageSongs
                  title="My Playlist"
                  image="photo-my_playlist.jpg"
                  userTracks={filteredUserPlaylist}
                  getArtist={getArtist}
                  loadTrack={loadTrack}
                  setCurrentRelease={setCurrentRelease}
                  addTrack={addTrack}
                  removeTrack={removeTrack}
                />
              }
            ></Route>

            <Route
              path="/playlists/:playlist"
              element={
                <PagePlaylist
                  title={currentPlaylistInfo}
                  image={currentPlaylistInfo}
                  userTracks={filteredCurrentPlaylist}
                  getArtist={getArtist}
                  loadTrack={loadTrack}
                  setCurrentRelease={setCurrentRelease}
                  addTrack={addTrack}
                  removeTrack={removeTrack}
                />
              }
            ></Route>
          </Routes>
        </div>

        {/* Add the following Player component to the app */}
        <Player
          playing={playing}
          volume={volume}
          changeVolume={changeVolume}
          changePosition={changePosition}
          togglePlay={togglePlay}
          currentTrack={currentTrack}
        />
      </div>
    </Router>
  );
}

export default App;
