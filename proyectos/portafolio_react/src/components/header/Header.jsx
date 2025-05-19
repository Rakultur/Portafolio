import React, { useState } from 'react';
import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="logo">MiLogo</div>

      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Nosotros</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger"></span>
      </button>
    </header>
  );
}

export default Header;
