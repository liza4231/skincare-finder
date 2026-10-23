import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  function handleHomeClick(e) {
    e.preventDefault();
    navigate("/", {
      state: null,
      replace: true,
    });
    window.location.reload();
  }

  return (
    <nav>
      <Link to="/" onClick={handleHomeClick}>
        SkinCare Finder
      </Link>
    </nav>
  );
}

export default NavBar;