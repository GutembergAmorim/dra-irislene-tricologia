import './Header.css';
import Button from '../../components/Button/Button';

export default function Header() {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                  <h2>Dra. Irislene Brasil</h2>
                </div>

                <nav className='header-nav'>
                  <ul>
                     <li><a href="#especialidades">Especialidades</a></li>
                     <li><a href="#sobre">Sobre Mim</a></li>
                     <li><a href="#depoimentos">Depoimentos</a></li>
                     <li><a href="#contato">Contato</a></li>
                  </ul>

                  <a href="#contato">
                     <Button texto="Agendar Consulta" />
                  </a>
                </nav>
            </div>
        </header>
    );
}