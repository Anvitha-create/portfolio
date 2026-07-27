import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h3>Hello, I'm</h3>

        <h1>Anvitha Shetty</h1>

        <TypeAnimation
          sequence={[
            "Computer Science Engineer", 1500,
            "Full Stack Developer", 1500,
            "AI Researcher", 1500,
            "Cybersecurity Enthusiast", 1500,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          Third-year Computer Science Engineering student passionate about
          Full-Stack Development, Artificial Intelligence, Cybersecurity and
          Cloud Computing. Currently working as a Research Intern developing
          AI-powered software solutions.
        </p>

        <div className="hero-buttons">

          <a
            href="/AnvithaShetty.pdf"
            download="AnvithaShetty.pdf"
            className="btn"
          >
            <FaDownload style={{ marginRight: "8px" }} />
            Download Resume
          </a>

          <a
            href="https://github.com/Anvitha-create"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anvitha-shetty05/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>
      </motion.div>
    </section>
  );
}