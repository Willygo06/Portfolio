import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour fond translucide
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      })
    }
    closeMenu();
  }

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "Compétences", href: "#compétences" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo">Mon Portfolio</h1>

        {/* Menu Desktop */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e)=> handleScroll(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Burger menu */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
