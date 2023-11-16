import './style/index.css';
import UseIntersectionObserver from '../function/IntersectionObserver';
import ProjetsElements from '../../projets.json';
import Carousel from './carousel';

function Projets() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-projets" id="projets">
      <div className="projets hidden">
        <h2>Mes Travaux</h2>
        <div className="carousel-wrapper">
          <Carousel projets={ProjetsElements} />
        </div>
      </div>
    </section>
  );
}

export default Projets;
