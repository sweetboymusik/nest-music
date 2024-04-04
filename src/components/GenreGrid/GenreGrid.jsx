import "./GenreGrid.css";
import GenreCard from "../GenreCard/GenreCard";

function GenreGrid() {
  return (
    <div className="genre-grid">
      {/* Initial setup just to check if grid is working */}
      <GenreCard
        genre="R&B"
        imageUrl="https://images.unsplash.com/photo-1574169208507-84376144848b"
      />
      <GenreCard
        genre="Pop"
        imageUrl="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6"
      />
      <GenreCard
        genre="Rock"
        imageUrl="https://images.unsplash.com/photo-1541661538396-53ba2d051eed"
      />
      <GenreCard
        genre="Jazz"
        imageUrl="https://images.unsplash.com/photo-1595411425732-e69c1abe2763"
      />
      <GenreCard
        genre="Country"
        imageUrl="https://images.unsplash.com/photo-1599496507927-9056debd0f0a"
      />
      <GenreCard
        genre="Country"
        imageUrl="https://images.unsplash.com/photo-1599496507927-9056debd0f0a"
      />
      <GenreCard
        genre="Country"
        imageUrl="https://images.unsplash.com/photo-1599496507927-9056debd0f0a"
      />
      <GenreCard
        genre="Country"
        imageUrl="https://images.unsplash.com/photo-1599496507927-9056debd0f0a"
      />
    </div>
  );
}

export default GenreGrid;
