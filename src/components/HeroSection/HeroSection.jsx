import React from 'react';
import './HeroSection.css';
import charactersImg from '../../assets/personajes.png';

export default function HeroSection() {
  return (
    <div className="hero d-flex flex-column justify-content-center align-items-start text-white">
      <div className="container py-5">
        <img src={charactersImg} alt="Characters" className="img-fluid mb-4" />
        <h1 className="display-4 fw-bold text-primary">TrapLife - RolPlay</h1>
        <p className="lead">
          Bereite dich auf eine häubrige Landung vor! Es erwartet dich eine Stadt die du noch nie zuvor gesehen hast & niemals schläft.
          Tauche in die Welt von Los Santos ein & erschaffe deinen personalisierten Charakter.
        </p>
        <div className="d-flex gap-3 mt-3">
          <button className="btn btn-primary">MITSPIELEN</button>
          <div className="bg-dark rounded px-3 py-2">SPIELER: 0</div>
        </div>
      </div>
    </div>
  );
}
