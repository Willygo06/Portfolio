import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour fond translucide
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#à-propos" },
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
            <a key={link.href} href={link.href} onClick={closeMenu}>
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
