import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search Products</NavLink>
    </nav>
  );
}

export default NavBar;