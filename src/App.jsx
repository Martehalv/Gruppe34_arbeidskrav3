import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Resources from "./components/Resources";
import "./styles/Layout.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Resources />} />
      </Routes>
    </Router>
  );
} //Skal

export default App;
