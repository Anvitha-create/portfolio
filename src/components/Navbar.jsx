import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaCode />
        <span>Anvitha</span>
      </div>

      <ul className="nav-links">
        <li><Link to="hero" smooth duration={500}>Home</Link></li>
        <li><Link to="about" smooth duration={500}>About</Link></li>
        <li><Link to="experience" smooth duration={500}>Experience</Link></li>
        <li><Link to="projects" smooth duration={500}>Projects</Link></li>
        <li><Link to="skills" smooth duration={500}>Skills</Link></li>
        <li><Link to="contact" smooth duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}