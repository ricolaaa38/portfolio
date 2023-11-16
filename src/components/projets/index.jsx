import './style/index.css';
import UseIntersectionObserver from '../function/IntersectionObserver';
import ProjetsElements from './projets.json';

function Projets() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-projets" id="projets">
      <div className="projets hidden">
        <h2>Mes Travaux</h2>
        <div className="carousel-wrapper"></div>
      </div>
    </section>
  );
}

export default Projets;
