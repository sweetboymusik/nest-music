import "./NavBar.css";

import NavItem from "../NavItem/NavItem.jsx";
import NavLogo from "../NavLogo/NavLogo";

import { FaHouseChimney, FaUser } from "react-icons/fa6";
import { FaRecordVinyl, FaMusic, FaHeadphones } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function NavBar({ filterUserArtists }) {
  function toggleActive(e) {
    let spans = document.querySelectorAll(".nav-link");
    spans.forEach((span) => span.classList.remove("nav-active"));
    e.target.closest(".nav-link").classList.add("nav-active");
  }

  return (
    <nav>
      <NavLogo />
      <br />
      <h2>Catalog</h2>
      <span className="nav-link nav-active">
        <NavItem
          text="Home"
          icon={<FaHouseChimney />}
          path={""}
          toggleActive={toggleActive}
        />
      </span>

      <span className="nav-link">
        <NavItem
          text="Browse"
          icon={<BsFillGrid1X2Fill />}
          path={"browse"}
          toggleActive={toggleActive}
        />
      </span>
      <br />
      <hr />
      <br />
      <h2>Library</h2>
      <span className="nav-link">
        <NavItem
          filter={filterUserArtists}
          text="Artists"
          icon={<FaUser />}
          path={"library/artists"}
          toggleActive={toggleActive}
        />
      </span>
      <span className="nav-link">
        <NavItem
          text="Albums"
          icon={<FaRecordVinyl />}
          path={"library/albums"}
          toggleActive={toggleActive}
        />
      </span>
      <span className="nav-link">
        <NavItem
          text="Songs"
          icon={<FaMusic />}
          path={"library/songs"}
          toggleActive={toggleActive}
        />
      </span>
      <span className="nav-link">
        <NavItem
          text="Playlist"
          icon={<FaHeadphones />}
          path={"library/playlist"}
          toggleActive={toggleActive}
        />
      </span>
    </nav>
  );
}

export default NavBar;
