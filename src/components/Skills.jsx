const skills = {
  Languages: ["Python", "C", "C++", "JavaScript"],
  Frontend: ["React", "HTML", "CSS", "JavaScript"],
  Backend: ["Node.js", "FastAPI", "Django"],
  Database: ["MongoDB", "SQLite", "PostgreSQL", "Supabase"],
  AI: ["PyTorch", "CodeBERT", "XGBoost", "GNN", "LSTM"],
  Cloud: ["Azure", "Redis", "Git", "Linux", "WebSocket"],
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <h2 className="title">Technical Skills</h2>

        <div className="grid three">
          {Object.entries(skills).map(([category, items]) => (
            <div className="card" key={category}>
              <h3>{category}</h3>

              <br />

              {items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: "inline-block",
                    margin: "6px",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    background: "#38bdf8",
                    color: "#0f172a",
                    fontWeight: "600",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}