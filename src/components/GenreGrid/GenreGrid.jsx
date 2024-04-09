import "./GenreGrid.css";
import GenreCard from "../GenreCard/GenreCard";
import artworkRB from "../../assets/images/genres/artwork-r&b.jpg";
import artworkPop from "../../assets/images/genres/artwork-pop.jpg";
import artworkRock from "../../assets/images/genres/artwork-rock.jpg";
import artworkJazz from "../../assets/images/genres/artwork-jazz.jpg";
import artworkCountry from "../../assets/images/genres/artwork-country.jpg";
import artworkElectronic from "../../assets/images/genres/artwork-electronic.jpg";
import artworkFolk from "../../assets/images/genres/artwork-folk.jpg";
import artworkClassical from "../../assets/images/genres/artwork-classical.jpg";
import artworkAlternative from "../../assets/images/genres/artwork-alternative.jpg";
import artworkMore from "../../assets/images/genres/artwork-more.png";

function GenreGrid({ filterArtists }) {
  return (
    <div className="genre-grid">
      {/* Initial setup just to check if grid is working */}
      <GenreCard
        genre="R&B"
        imageUrl={artworkRB}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Pop"
        imageUrl={artworkPop}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Rock"
        imageUrl={artworkRock}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Jazz"
        imageUrl={artworkJazz}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Country"
        imageUrl={artworkCountry}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Electronic"
        imageUrl={artworkElectronic}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Folk"
        imageUrl={artworkFolk}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Classical"
        imageUrl={artworkClassical}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Alternative"
        imageUrl={artworkAlternative}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="More..."
        imageUrl={artworkMore}
        filterArtists={filterArtists}
      />
    </div>
  );
}

export default GenreGrid;
