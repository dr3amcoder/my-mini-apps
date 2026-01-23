import { NavLink } from "react-router-dom";
import { HouseHeart, BadgeInfo, ChessKing } from "lucide-react";

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/">
          <HouseHeart size={18} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/about">
          <BadgeInfo size={18} />
          <span>About</span>
        </NavLink>
        <NavLink to="/mini-apps">
          <ChessKing size={18} />
          <span>Mini Apps</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
