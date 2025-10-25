import React from "react";
import "../styles/techStack.css";
import {TechStackData} from '../data/data';


export const TechStack = () => (
  <section className="techstack-section">
    <h2 className="title">Arsenal de Compétences</h2>
    <div className="tech-grid">
      {TechStackData.map((tech) => (
        <div key={tech.name} className="tech-card">
          <img src={tech.logo} alt={tech.name} />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  </section>
);