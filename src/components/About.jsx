import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="container">

        <h2 className="title">About Me</h2>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm <strong>Anvitha Shetty</strong>, a third-year Computer Science
            Engineering student passionate about Full Stack Development,
            Artificial Intelligence, Cybersecurity, and Cloud Computing.
          </p>

          <br />

          <p>
            I have internship experience at Infosys Springboard and Microsoft
            Elevate (Azure), where I worked on scalable web applications and
            cloud-native solutions.
          </p>

          <br />

          <p>
            Currently, I'm working as a <strong>Research Intern (May 2026 –
            Present)</strong>, developing <strong>ShelLM</strong>, an
            LLM-powered Linux SSH Honeypot for cybersecurity research.
          </p>

        </motion.div>

      </div>
    </section>
  );
}