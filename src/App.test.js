import { render, screen } from '@testing-library/react';
import App from './App';
import AlbumGrid from './components/AlbumGrid/AlbumGrid';
import { currentArtist, getArtist, setCurrentRelease, addArtist, removeArtist} from './App'
import PageHome from './components/PageHome/PageHome';


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

test("AlbumCard renders", () => {
  render(<App/>);
  render(<PageHome
    currentArtist={currentArtist}
    getArtist={getArtist}
    setCurrentRelease={setCurrentRelease}
    addArtist={addArtist}
    removeArtist={removeArtist}
    />)
  const AlbumCard = screen.getByRole("image")
  expect(AlbumCard).toBeInTheDocument();
});



