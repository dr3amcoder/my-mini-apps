import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/mini-apps">Mini Apps</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
