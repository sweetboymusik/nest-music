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

function GenreGrid() {
  return (
    <div className="genre-grid">
      {/* Initial setup just to check if grid is working */}
      <GenreCard genre="R&B" imageUrl={artworkRB} />
      <GenreCard genre="Pop" imageUrl={artworkPop} />
      <GenreCard genre="Rock" imageUrl={artworkRock} />
      <GenreCard genre="Jazz" imageUrl={artworkJazz} />
      <GenreCard genre="Country" imageUrl={artworkCountry} />
      <GenreCard genre="Electronic" imageUrl={artworkElectronic} />
      <GenreCard genre="Folk" imageUrl={artworkFolk} />
      <GenreCard genre="Classical" imageUrl={artworkClassical} />
      <GenreCard genre="Alternative" imageUrl={artworkAlternative} />
      <GenreCard genre="More..." imageUrl={artworkMore} />
    </div>
  );
}

export default GenreGrid;
