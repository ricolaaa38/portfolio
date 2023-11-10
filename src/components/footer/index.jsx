import LogoGithub from '../../assets/logo-github';
import LogoLinkedin from '../../assets/logo-linkedin';
import './style/index.css';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="lien-reseaux">
        <LogoGithub />
        <LogoLinkedin />
      </div>
      <p>made by Nico</p>
    </footer>
  );
}
export default Footer;
