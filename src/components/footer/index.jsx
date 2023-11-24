import LogoGithub from '../../assets/logo-github';
import LogoLinkedin from '../../assets/logo-linkedin';
import './style/index.css';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="lien-reseaux">
        <a
          href={'https://github.com/ricolaaa38'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub />
        </a>
        <a
          href={
            'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoLinkedin />
        </a>
      </div>
      <p>made by Nico</p>
    </footer>
  );
}
export default Footer;
