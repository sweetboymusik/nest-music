import { Link } from "react-router-dom";

function BrowseCard({ text, image }) {
  return (
    <Link to={text.toLowerCase()}>
      <div>
        <h2>{text}</h2>
      </div>
    </Link>
  );
}
export default BrowseCard;
