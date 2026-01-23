import { NavLink } from "react-router-dom";
import { HouseHeart, BadgeInfo, ChessKing } from "lucide-react";

const NavBar = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}KittyCodes.png`}
          alt="KittyCodes Logo"
          style={{ width: "40px", height: "40px" }}
        />
        <h2 style={{ color: "#667eea", fontSize: "1.5rem", margin: 0 }}>
          dr3amcoder's Mini Apps
        </h2>
      </div>
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
