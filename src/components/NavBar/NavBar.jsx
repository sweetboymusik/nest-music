import "./NavBar.css";

import NavItem from "../NavItem/NavItem.jsx";
import NavLogo from "../NavLogo/NavLogo";

import { FaHouseChimney } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaRecordVinyl } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function NavBar({ filterUserArtists }) {
  return (
    <nav>
      <NavLogo />
      <br />
      <h2>Catalog</h2>
      <NavItem text="Home" icon={<FaHouseChimney />} path={"home"} />
      <NavItem text="Browse" icon={<BsFillGrid1X2Fill />} path={"browse"} />
      <hr />
      <h2>Library</h2>
      <NavItem
        filter={filterUserArtists}
        text="Artists"
        icon={<FaUser />}
        path={"library/artists"}
      />
      <NavItem text="Albums" icon={<FaRecordVinyl />} path={"library/albums"} />
      <NavItem text="Songs" icon={<FaMusic />} path={"library/songs"} />
      <NavItem
        text="Playlist"
        icon={<FaHeadphones />}
        path={"library/playlist"}
      />
    </nav>
  );
}

export default NavBar;
