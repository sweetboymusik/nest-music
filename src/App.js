import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Player from "./components/Player/Player";

function App() {
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
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                  <p>This is a test paragraph</p>
                </div>
              }
            />
            <Route path="/browse"></Route>
            <Route paty="/library"></Route>
          </Routes>
        </div>

        <Player />
      </div>
    </Router>
  );
}

export default App;
