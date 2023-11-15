import AnimatedBanner from '../banner/animated-background/index';
import UseIntersectionObserver from '../function/IntersectionObserver';
import './style/index.css';

function Competences() {
  UseIntersectionObserver('.hidden');
  return (
    <section className="portfolio-competences">
      <AnimatedBanner />
      <div className="compentences-content hidden">
        <h2>Mes compétences</h2>
        <div className="competences-outils">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <h3>Je peux travailler avec :</h3>
        <div className="competences-outils">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Competences;
