import "./GenreGrid.css";
import GenreCard from "../GenreCard/GenreCard";
import artworkRB from '../../assets/images/artwork-r&b.jpg';
import artworkPop from '../../assets/images/artwork-pop.jpg';
import artworkRock from '../../assets/images/artwork-rock.jpg';
import artworkJazz from '../../assets/images/artwork-jazz.jpg';
import artworkCountry from '../../assets/images/artwork-country.jpg';
import artworkElectronic from '../../assets/images/artwork-electronic.jpg';
import artworkFolk from '../../assets/images/artwork-folk.jpg';
import artworkClassical from '../../assets/images/artwork-classical.jpg';
import artworkAlternative from '../../assets/images/artwork-alternative.jpg';


function GenreGrid() {
  return (
    <div className="genre-grid">
      {/* Initial setup just to check if grid is working */}
      <GenreCard
        genre="R&B"
        imageUrl={artworkRB}
      />
      <GenreCard
        genre="Pop"
        imageUrl={artworkPop}
      />
      <GenreCard
        genre="Rock"
        imageUrl={artworkRock}
      />
      <GenreCard
        genre="Jazz"
        imageUrl={artworkJazz}
      />
      <GenreCard
        genre="Country"
        imageUrl={artworkCountry}
      />
      <GenreCard
        genre="Electronic"
        imageUrl={artworkElectronic}
      />
      <GenreCard
        genre="Folk"
        imageUrl={artworkFolk}
      />
      <GenreCard
        genre="Classical"
        imageUrl={artworkClassical}
      />
      <GenreCard
        genre="Alternative"
        imageUrl={artworkAlternative}
      />      
      <GenreCard
      genre="More..."
      imageUrl=""
    />
    </div>
  );
}

export default GenreGrid;
