import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import MiniApps from "./pages/MiniApps";

const App = () => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mini-apps" element={<MiniApps />} />
      </Routes>
    </div>
  );
};

export default App;
