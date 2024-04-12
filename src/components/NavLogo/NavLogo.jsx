import "./NavLogo.css";

function NavLogo() {
  return (
    <div className="logo">
      <img src={require("../../assets/images/other/logo.png")} alt="nav logo" />
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
