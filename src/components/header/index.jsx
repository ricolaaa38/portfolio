import Logo from '../../assets/Border-Color.jsx';
import './style/index.css';

function Header() {
  return (
    <header className="portfolio-header">
      <Logo />
      <nav>
        <a href="/">Accueil</a>
        <a href="#about">A propos</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
