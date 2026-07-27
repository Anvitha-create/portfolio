import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <h2 className="title">Contact</h2>

        <div className="card">

          <p><FaEnvelope /> anvithashetty41@gmail.com</p>

          <br />

          <p><FaPhone /> +91 7892214645</p>

          <br />

          <p>
            <FaGithub /> GitHub
          </p>

          <br />

          <p>
            <FaLinkedin /> LinkedIn
          </p>

        </div>

      </div>
    </section>
  );
}