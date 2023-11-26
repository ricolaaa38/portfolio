import { useState } from 'react';
import Logo from '../../assets/Border-Color.jsx';
import './style/index.css';

function Header() {
  const [isNavActive, setNavActive] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = () => {
    setNavActive(!isNavActive);
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute('href').substring(1);
    console.log('Target ID:', targetId);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setNavActive(false);
    setDropdownVisible(false);
  };

  return (
    <header className={`portfolio-header ${isNavActive ? 'active' : ''}`}>
      <nav>
        <Logo />
        <ul className={`${isDropdownVisible ? 'visible' : 'non-visible'}`}>
          <li>
            <a href="#accueil" onClick={handleLinkClick} alt="lien accueil">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick} alt="lien a propos">
              A propos
            </a>
          </li>
          <li>
            <a href="#projets" onClick={handleLinkClick} alt="lien projets">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick} alt="lien contact">
              Contact
            </a>
          </li>
        </ul>
        <div id="icons" onClick={handleIconClick}></div>
      </nav>
    </header>
  );
}

export default Header;
