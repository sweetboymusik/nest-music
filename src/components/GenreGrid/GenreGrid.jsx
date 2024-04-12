import "./GenreGrid.css";
import GenreCard from "../GenreCard/GenreCard";

function GenreGrid({ filterArtists }) {
  return (
    <div className="genre-grid">
      <GenreCard
        genre="R&B"
        imageUrl={require("../../assets/images/genres/artwork-r&b.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Pop"
        imageUrl={require("../../assets/images/genres/artwork-pop.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Rock"
        imageUrl={require("../../assets/images/genres/artwork-rock.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Jazz"
        imageUrl={require("../../assets/images/genres/artwork-jazz.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Country"
        imageUrl={require("../../assets/images/genres/artwork-country.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Electronic"
        imageUrl={require("../../assets/images/genres/artwork-electronic.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Folk"
        imageUrl={require("../../assets/images/genres/artwork-folk.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Classical"
        imageUrl={require("../../assets/images/genres/artwork-classical.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="Alternative"
        imageUrl={require("../../assets/images/genres/artwork-alternative.jpg")}
        filterArtists={filterArtists}
      />
      <GenreCard
        genre="More..."
        imageUrl={require("../../assets/images/genres/artwork-more.jpg")}
        filterArtists={filterArtists}
      />
    </div>
  );
}

export default GenreGrid;
