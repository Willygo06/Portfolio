import React from "react";
import { techStack } from "../data/data.js";
import "../styles/techStack.css";

export const TechStack = () => (
  <section id="compétences" className="tech-section">
    <h2>Compétences Techniques</h2>
    <div className="tech-grid">
      
      {/* === FRONTEND === */}
      <div className="tech-category">
        <h3>Frontend</h3>
        <div className="tech-items">
          {techStack.frontend.map((tech) => (
            <div key={tech.name} className="tech-card">
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* === BACKEND === */}
      <div className="tech-category">
        <h3>Backend</h3>
        <div className="tech-items">
          {techStack.backend.map((tech) => (
            <div key={tech.name} className="tech-card">
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* === DATABASE === */}
      <div className="tech-category">
        <h3>Database</h3>
        <div className="tech-items">
          {techStack.database.map((tech) => (
            <div key={tech.name} className="tech-card">
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* === Tools === */}
      <div className="tech-category">
        <h3>Tools</h3>
        <div className="tech-items">
          {techStack.tools.map((tech) => (
            <div key={tech.name} className="tech-card">
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);
