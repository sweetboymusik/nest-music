import "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem({ text, icon, path, filter }) {
  function handleOnClick(e) {
    let element = e.target.closest(".nav-item");
    element.classList.add("nav-active");
  }

  return (
    <Link onClick={filter} to={`/${path}`} className="nav-item">
      {icon}
      {text}
    </Link>
  );
}

export default NavItem;
