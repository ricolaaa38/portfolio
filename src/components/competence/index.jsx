import AnimatedBanner from '../banner/animated-background/index';
import './style/index.css';

function Competences() {
  return (
    <section className="portfolio-competences">
      <AnimatedBanner />
      <div className="compentences-content">
        <h2>Mes compétences</h2>
        <div className="mes-competences">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="outils">
          <h3>Je peux travailler avec :</h3>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Competences;
