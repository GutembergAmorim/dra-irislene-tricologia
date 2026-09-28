import { useState } from 'react';
import './Header.css';
import Button from '../../components/Button/Button';
import logoMonogram from '../../assets/logo-monogram.png';
import logoName from '../../assets/logo-name.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                  <img src={logoName} alt="Dra. Irislene Brasil" className="logo-desktop" />
                  <img src={logoMonogram} alt="IB" className="logo-mobile" />
                </div>

                <button 
                  className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                  <ul>
                     <li><a href="#especialidades" onClick={() => setIsMenuOpen(false)}>Especialidades</a></li>
                     <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Mim</a></li>
                     <li><a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
                     <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                  </ul>

                  <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                     <Button texto="Agendar Consulta" />
                  </a>
                </nav>
            </div>
        </header>
    );
}
