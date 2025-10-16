import React from "react";
import "../styles/Footer.css";

export const Footer = () => (
    <div className="footer">
            © {new Date().getFullYear()} Gomes Fortes Wilfried — Créé avec <span className="heart">❤️</span> et React
    </div>
);