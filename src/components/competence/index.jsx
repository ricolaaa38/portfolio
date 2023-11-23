import AnimatedBanner from '../banner/animated-background/index';
import UseIntersectionObserver from '../function/IntersectionObserver';
import './style/index.css';
import ReactLogo from '../../assets/logo/react.png';
import Css3 from '../../assets/logo/css3.png';
import Html5 from '../../assets/logo/html5.png';
import Javascript from '../../assets/logo/javascript.png';
import Scss from '../../assets/logo/sass.png';
import Node from '../../assets/logo/node.png';
import Github from '../../assets/logo/github.png';

function Competences() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-competences hidden">
      <div className="compentences-content hidden">
        <h2>Mes compétences</h2>
        <div className="competences-outils">
          <img src={ReactLogo} alt="react logo" />
          <img src={Css3} alt="css3 logo" />
          <img src={Html5} alt="Html5 logo" />
          <img src={Javascript} alt="Javascript logo" />
          <img src={Scss} alt="Scss sass logo" />
          <img src={Node} alt="Node logo" />
          <img className="github-logo" src={Github} alt="Github logo" />
        </div>
      </div>
    </section>
  );
}

export default Competences;
