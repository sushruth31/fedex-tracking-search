import { NavLink, useNavigate } from "react-router-dom";
import { signOutHandler } from "./firebase";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="navbarul">
        <NavLink className={(navData) => (navData.isActive ? "navbarlink active" : "navbarlink")} to="/search">
          Search
        </NavLink>

        <NavLink className="navbarlink" to="/about" activeClassName="active">
          AI
        </NavLink>

        <NavLink className="navbarlink" to="/blockchain" activeClassName="active">
          Blockchain
        </NavLink>
        <button className="btn logoutbtn" onClick={() => signOutHandler(() => navigate("/", { replace: true }))}>
          Logout
        </button>
      </ul>
    </nav>
  );
}
