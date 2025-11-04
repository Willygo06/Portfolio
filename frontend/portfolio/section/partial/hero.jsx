import React from "react";
import "../styles/hero.css";

export const Hero = () => {
    return (
    <section id="accueil" className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
            <div className="hero-text">

            <h1>
                <span className="glow">Salut, moi c'est </span>
                <span className="highlight">Wilfried</span>
            </h1>
            <h2 className="typing">Développeur FullStack</h2>

            <p className="hero-tagline">
                Passionné par la création d'expériences web innovantes et performantes.
            </p>

            <a href="#projets" className="hero-btn">
                Explorer mes projets 
            </a>
            </div>

            <div className="hero-image-container">
            <img src="public/images/Wilfried1.jpg" alt="Wilfried" className="hero-image" />
            <div className="holo-ring"></div>
        </div>
        </div>

    </section>
)}