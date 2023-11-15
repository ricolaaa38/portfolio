import './style/index.css';
import UseIntersectionObserver from '../function/IntersectionObserver';

function Projets() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-projets" id="projets">
      <div className="projets hidden">
        <h2>Mes Travaux</h2>
        <div className="mes-projets">
          <div className="projets1"></div>
          <div className="projets1"></div>
          <div className="projets1"></div>
          <div className="projets1"></div>
        </div>
      </div>
    </section>
  );
}

export default Projets;
