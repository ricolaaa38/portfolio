import './style/index.css';
import UseIntersectionObserver from '../function/IntersectionObserver';

import Carousel from './carousel';

function Projets() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-projets" id="projets">
      <div className="projets">
        <h2 className="hidden">Mes Travaux</h2>
        <div className="carousel-wrapper hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Projets;
