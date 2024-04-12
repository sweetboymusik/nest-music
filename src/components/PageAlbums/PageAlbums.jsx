// renders a grid of the user's albums using the UserAlbumGrid component

import "./PageAlbums.css";
import UserAlbumGrid from "../UserAlbumsGrid/UserAlbumGrid";
import EmptyListCard from "../EmptyListCard/EmptyListCard";

function PageAlbums({ userAlbums, getArtist, setCurrentRelease }) {
  return (
    <div className="page-albums">
      <h2>Library/Albums</h2>
      <hr className="home-divider" />
      {userAlbums.length > 0 ? (
        <UserAlbumGrid
          userAlbums={userAlbums}
          getArtist={getArtist}
          setCurrentRelease={setCurrentRelease}
        />
      ) : (
        <EmptyListCard />
      )}
    </div>
  );
}

export default PageAlbums;
