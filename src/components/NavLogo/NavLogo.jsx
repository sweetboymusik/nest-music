import "./NavLogo.css";
import logo from "../../assets/images/other/logo.png";

function NavLogo() {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <div className="logo-text">
        <h1>
          NEST/ <br />
          MUSIC
        </h1>
      </div>
    </div>
  );
}

export default NavLogo;
