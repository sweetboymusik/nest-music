import "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem({ text, icon, path }) {
  function handleOnClick(e) {
    let element = e.target.closest(".nav-item");
    element.classList.add("nav-active");
  }

  return (
    <Link to={`/${path}`} className="nav-item">
      {icon}
      {text}
    </Link>
  );
}

export default NavItem;
