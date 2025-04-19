// Header.jsx
import { Link } from "react-router-dom";
import "../styles/Layout.scss";

export default function Header() {
  return (
    <header className="menu">
      <Link to="/" className="team">TEAM 34</Link>
      <nav className="navList">
        <Link to="/">Hjem</Link>
        <span>|</span>
        <Link to="/celina">Celina</Link>
        <Link to="/sara">Sara</Link>
        <Link to="/aynazar">Aynazar</Link>
        <Link to="/marte">Marte</Link>
      </nav>
    </header> 
  );
}
