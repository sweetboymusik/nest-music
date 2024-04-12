import { render, screen } from '@testing-library/react';
import App from './App';
import AlbumGrid from './components/AlbumGrid/AlbumGrid';
import { getArtist, setCurrentRelease, addArtist, removeArtist} from './App'
import PageHome from './components/PageHome/PageHome';
import AlbumCard from './components/AlbumCard/AlbumCard';


//.getByText(//i);
//.getByRole();
//.getBy

//AlbumCard
//SongCard

test("Text in logo renders", () => {
  render(<App/>);
  const logoText = screen.getByText(/Nest/i)
  const logoText2 = screen.getByText(/Music/i)
  expect(logoText).toBeInTheDocument();
  expect(logoText2).toBeInTheDocument();
});

test("Player renders", () => {
  render(<App/>);
  const playerControls = screen.getByTestId("21343")
  expect(playerControls).toBeInTheDocument();
});

test("AlbumCard", () => {
  render(<AlbumCard/>);
  const AlbumCardImg = screen.getByAltText()

});


/* 
render(<App/>);
  let currentArtist = [{
    "id": "a0001",
    "name": "Amara",
    "genre": "R&B",
    "photo": "amara.jpg",
    "liked": false,
    "releases": [
      {
        "id": "r0001",
        "title": "Soulful Reverie",
        "year": 2001,
        "artwork": "amara-soulful_reverie.jpg",
        "liked": false,
        "tracks": [
          {
            "id": "t0001",
            "title": "Soul's Embrace",
            "length": "3:15",
            "liked": false,
            "added": false,
            "link": "./src/assets/tracks/album1track1.mp3"
          },
          {
            "id": "t0002",
            "title": "Midnight Serenade",
            "length": "3:19",
            "liked": false,
            "added": false,
            "link": "./src/assets/tracks/album1track2.mp3"
          }
        ]
      },
      {
        "id": "r0002",
        "title": "Velvet Essence",
        "year": 2009,
        "artwork": "amara-velvet_essence.jpg",
        "liked": false,
        "tracks": [
          {
            "id": "t0003",
            "title": "Velvet Dreams",
            "length": "3:28",
            "liked": false,
            "added": false,
            "link": "./src/assets/tracks/album2track1.mp3"
          },
          {
            "id": "t0004",
            "title": "Heartbeat Harmony",
            "length": "3:08",
            "liked": false,
            "added": false,
            "link": "./src/assets/tracks/album2track2.mp3"
          }
        ]
      },
      {
        "id": "r0003",
        "title": "Eclipse of Emotions",
        "year": 2020,
        "artwork": "amara-eclipse_of_emotions.jpg",
        "liked": false,
        "tracks": [
          {
            "id": "t0005",
            "title": "Eclipse of Love",
            "length": "3:07",
            "liked": false,
            "added": false,
            "link": "./src/assets/tracks/album3track1.mp3"
          },
          {
            "id": "t0006",
            "title": "Rhythm of Desire",
            "length": "3:24",
            "liked": false,
            "added": false,
            "link": "./src/assets/tracks/album3track2.mp3"
          }
        ]
      }
    ]
  }]

  render(<PageHome
    currentArtist={[1,2,3,4]}
    getArtist={getArtist}
    setCurrentRelease={setCurrentRelease}
    addArtist={addArtist}
    removeArtist={removeArtist}
    />)
  const AlbumCard = screen.getByRole("image")
  expect(AlbumCard).toBeInTheDocument();
  */