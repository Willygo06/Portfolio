import React from "react";
import "../styles/project.css";

export const Projects = () => (
  <section id="projets" className="projects-section">
    <h2>Mes Projets</h2>

    {/* === ÉcoTrack === */}
    <div className="project-row">
      <div className="project-image-container">
        <img className="ecotrack" src="public/images/EcoTrack.jpg" alt="ÉcoTrack" />
      </div>
      <div className="project-content">
        <h3>ÉcoTrack</h3>
        <p className="project-notes">
          2025 - Projet de fin d'année (Pré-Msc) - Epitech Nice
        </p>
        <p className="project-description">
          Une application mobile ludique pour mesurer ton empreinte carbone, gagner des récompenses et adopter un mode de vie plus vert.
        </p>
        <ul className="project-tech">
          <li>React Native (Expo Go)</li>
          <li>NodeJS + ExpressJS</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>

    {/* === Projet IRC === */}
    <div className="project-row reverse">
      <div className="project-image-container">
        <img className="projet-irc" src="public/images/Projet-IRC.png" alt="Projet IRC" />
      </div>
      <div className="project-content">
        <h3>Projet IRC</h3>
        <p className="project-notes">
          2025 - Projet scolaire - Epitech Nice
        </p>
        <p className="project-description">
          Plateforme web de chat en temps réel avec interface moderne (Discord).
        </p>
        <ul className="project-tech">
          <li>ReactJS</li>
          <li>NodeJS + ExpressJS</li>
          <li>Socket.IO</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>

    {/* === JobBoard === */}
    <div className="project-row">
      <div className="project-image-container">
        <img className="jobboard" src="public/images/Indeed.jpg" alt="JobBoard" />
      </div>
      <div className="project-content">
        <h3>JobBoard</h3>
        <p className="project-notes">
          2024 - Projet scolaire - Epitech Nice
        </p>
        <p className="project-description">
          Plateforme web de recherche et publication d'offres d'emploi (Indeed).
        </p>
        <ul className="project-tech">
          <li>ReactJS</li>
          <li>NodeJS + ExpressJS</li>
          <li>MySQL + Prisma</li>
        </ul>
      </div>
    </div>

    {/* === Quest === */}
    <div className="project-row reverse">
      <div className="project-image-container">
        <img className="quest" src="public/images/Quest.png" alt="Quest" />
      </div>
      <div className="project-content">
        <h3>Quest</h3>
        <p className="project-notes">
          2023 - Projet de fin de formation - La Capsule Nice
        </p>
        <p className="project-description">
          Plateforme web multi-service de livraison en ligne (Uber).
        </p>
        <ul className="project-tech">
          <li>ReactJS + NextJS + TailwindCSS</li>
          <li>NodeJS + ExpressJS</li>
          <li>MongoDB</li>
        </ul>
        <a
          href="https://quest-frontend-chi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Voir le projet →
        </a>
      </div>
    </div>
  </section>
);
