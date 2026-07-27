import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Powered Autonomous Code Review & Bug Prediction",
    date: "May 2026 – June 2026",
    description:
      "Developed an AI-powered code review platform using FastAPI, CodeBERT, XGBoost, Graph Neural Networks (GNN), LSTM, and AST Parsing for automated bug detection and code quality analysis. Achieved 53.0% F1-score and 57.6% precision on the CodeXGLUE Defect Detection benchmark.",
    tech: [
      "Python",
      "FastAPI",
      "CodeBERT",
      "PyTorch",
      "XGBoost",
      "GNN",
      "LSTM",
      "AST Parsing",
      "GitHub API"
    ]
  },

  {
    title: "Quality Education Quiz App",
    date: "Nov 2025 – Jan 2026",
    description:
      "Built a full-stack quiz application using React, FastAPI, and Supabase with dynamic question fetching, backend validation, real-time score tracking, and support for concurrent quiz sessions.",
    tech: [
      "React",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "REST API"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>

        <div className="grid two">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>

              <p
                style={{
                  color: "#38bdf8",
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                {project.date}
              </p>

              <p>{project.description}</p>

              <br />

              <div>
                {project.tech.map((tech) => (
                  <span className="skill-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}