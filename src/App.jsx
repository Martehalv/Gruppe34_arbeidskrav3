import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/Layout.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="menu">
        <Link to="/" className="team">
          TEAM 34
        </Link>
        <nav className="navList">
          <Link to="/">Hjem</Link>
          <span>|</span>
          <Link to="/">Celina</Link>
          <Link to="/">Sara</Link>
          <Link to="/">Aynazar</Link>
          <Link to="/">Marte</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
