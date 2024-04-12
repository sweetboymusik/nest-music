import { render, screen } from '@testing-library/react';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { BrowserRouter } from 'react-router-dom';


test("ArtistCard", () => {
    render( <BrowserRouter>
      <ArtistCard artist={"Remy Bliss"} imageUrl={"remy_bliss.jpg"}/>
      </BrowserRouter>
    );
    const ArtistCardImg = screen.getByAltText("Remy Bliss")
    expect(ArtistCardImg).toBeInTheDocument();
});
  