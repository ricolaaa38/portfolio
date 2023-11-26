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

  const handleLinkClick = () => {
    setNavActive(false);
    setDropdownVisible(false);
  };

  return (
    <header className={`portfolio-header ${isNavActive ? 'active' : ''}`}>
      <nav>
        <Logo />
        <ul className={`${isDropdownVisible ? 'visible' : 'non-visible'}`}>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              A propos
            </a>
          </li>
          <li>
            <a href="#projets" onClick={handleLinkClick}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
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
