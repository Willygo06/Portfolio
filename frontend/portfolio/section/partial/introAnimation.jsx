import React, {useEffect, useState} from "react";
import "../styles/introAnimation.css"

export const IntroAnimation = ({onFinish}) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lancer la séquence
    const timer1 = setTimeout(() => setFadeOut(true), 3500); // Début du fondu
    const timer2 = setTimeout(() => onFinish(), 4500); // Fin et chargement du site

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`intro-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="ball-container">
        <img src="/images/Ballon-ligue1.png" alt="Football" className="ball" />
      </div>
      <h1 className="intro-title">
        <span className="highlight">Bienvenue sur mon portfolio</span>
      </h1>
    </div>
  );
}
