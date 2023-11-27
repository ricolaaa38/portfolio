import UseIntersectionObserver from '../function/IntersectionObserver';
import './style/index.css';
import ReactLogo from '../../assets/logo/react.png';
import Css3 from '../../assets/logo/css3.png';
import Html5 from '../../assets/logo/html5.png';
import Javascript from '../../assets/logo/javascript.png';
import Scss from '../../assets/logo/sass.png';
import Node from '../../assets/logo/node.png';
import Github from '../../assets/logo/github.png';
import Git from '../../assets/logo/git.png';
import Wakelet from '../../assets/logo/wakelet.png';
import Trello from '../../assets/logo/trello.png';
import Express from '../../assets/logo/expressjs.png';
import Mongo from '../../assets/logo/mongodb.png';

function Competences() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-competences hidden">
      <div className="compentences-content hidden">
        <h2>Mes compétences</h2>
        <div className="competences-outils">
          <img src={ReactLogo} alt="react logo" title="React" />
          <img src={Css3} alt="css3 logo" title="Css3" />
          <img src={Html5} alt="Html5 logo" title="Html5" />
          <img src={Javascript} alt="Javascript logo" title="Javascript" />
          <img src={Scss} alt="Scss sass logo" title="Scss" />
          <img src={Node} alt="Node logo" title="Node" />
          <img
            className="github-logo"
            src={Github}
            alt="Github logo"
            title="Github"
          />
        </div>
        <h2>Autres</h2>
        <div className="competences-outils">
          <img src={Express} alt="expressjs logo" title="Express.js" />
          <img src={Mongo} alt="mongodb logo" title="MongoDB" />
          <img src={Git} alt="git logo" title="Git" />
          <img src={Trello} alt="trello logo" title="Trello" />
          <img src={Wakelet} alt="wakelet logo" title="Wakelet" />
        </div>
      </div>
    </section>
  );
}

export default Competences;
