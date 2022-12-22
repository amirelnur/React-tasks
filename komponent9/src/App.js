import "./styles.css";
import { Route, Routes, NavLink } from "react-router-dom";
import About from "./About";
import Connection from "./Connection";
import Project from "./Project";

export default function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/connection">Connection</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/connection" element={<Connection />} />
        </Routes>
      </main>
    </>
  );
}
