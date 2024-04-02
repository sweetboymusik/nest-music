import "./NavItem.css";

function NavItem({ text, icon }) {
  function handleOnClick(e) {
    let element = e.target.closest(".nav-item");
    element.classList.add("nav-active");
  }

  return (
    <div className="nav-item" onClick={handleOnClick}>
      {icon}
      {text}
    </div>
  );
}

export default NavItem;
