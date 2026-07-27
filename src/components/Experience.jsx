import { motion } from "framer-motion";

const experience = [
  {
    title: "Research Intern",
    company: "NIT Trichy",
    duration: "May 2026 – Present",
    points: [
      "Developing ShelLM, an LLM-powered Linux SSH Honeypot.",
      "Building AI-driven Linux terminal simulation.",
      "Implementing SSH server using Paramiko.",
      "Creating Flask dashboard for real-time monitoring.",
      "Integrating Ollama, OpenAI, and Anthropic models.",
    ],
  },
  {
    title: "Student Intern",
    company: "Infosys Springboard",
    duration: "Nov 2025 – Jan 2026",
    points: [
      " Developed real-time vessel tracking and port analytics modules using React.js, Node.js, Django, Redis, and WebSocket-based live data streaming.",
      " Implemented JWT-based authentication and Role-Based Access Control (RBAC) to secure user access and protect application resources.",
      "Caollaborated in an Agile development environment to deliver scalable and secure features within a 3-month development cycle.",
    ],
  },
  {
    title: "Emerging Technologies Intern",
    company: "Microsoft Elevate (Azure)",
    duration: "Dec 2025 – Jan 2026",
    points: [
      "Designed cloud-native applications.",
      "Worked with Azure Compute, Storage & Networking.",
      "Applied secure cloud architecture principles.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">

        <h2 className="title">Experience</h2>

        <div className="grid two">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{job.title}</h3>

              <h4>{job.company}</h4>

              <p style={{ color: "#38bdf8", margin: "10px 0" }}>
                {job.duration}
              </p>

              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}