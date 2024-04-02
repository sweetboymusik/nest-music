import "./NavBar.css";

import NavItem from "../NavItem/NavItem.jsx";
import NavLogo from "../NavLogo/NavLogo";

import { FaHouseChimney } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaRecordVinyl } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function NavBar() {
  return (
    <nav>
      <NavLogo />
      <br />
      <h2>Catalog</h2>
      <NavItem text="Home" icon={<FaHouseChimney />} />
      <NavItem text="Browse" icon={<BsFillGrid1X2Fill />} />
      <hr />
      <h2>Library</h2>
      <NavItem text="Artists" icon={<FaUser />} />
      <NavItem text="Albums" icon={<FaRecordVinyl />} />
      <NavItem text="Songs" icon={<FaMusic />} />
      <NavItem text="Playlist" icon={<FaHeadphones />} />
    </nav>
  );
}

export default NavBar;
