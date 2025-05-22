import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo alineado a la izquierda */}
        <a className='imagenLogo navbar-brand' href="#">
          <img className='img-fluid' src={logo} alt="Logo" />
        </a>

        {/* Menú centrado */}
        <ul className="navbar-nav mx-auto d-flex flex-row justify-content-center align-items-center gap-4">
          <li className="nav-item"><a className="nav-link" href="#">INICIO</a></li>
          <li className="nav-item"><a className="nav-link" href="#">DISCORD</a></li>
          <li className="nav-item"><a className="nav-link" href="#">NORMAS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">FIVEM CONNECT</a></li>
        </ul>
      </div>
    </nav>
  );
}
