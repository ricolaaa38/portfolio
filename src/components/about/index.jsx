import UseIntersectionObserver from '../function/IntersectionObserver';
import './style/index.css';
import Competences from '../competence';
import Portrait from '../../assets/portrait.png';

function About() {
  UseIntersectionObserver('.hidden');

  return (
    <section className="portfolio-about">
      <div className="about" id="about">
        <div className="about-text-img">
          <div className="about-img">
            <img src={Portrait} alt="portraiot nicolas style draw" />
          </div>
          <div className="presentation-about hidden">
            <h2>À Propos de moi</h2>
            <p>
              Bienvenue sur mon portfolio ! Je m'appelle Nicolas, et après
              plusieurs années d'expérience dans diverses industries, j'ai
              décidé de donner une nouvelle orientation à ma carrière en me
              plongeant dans le passionnant monde du développement web.
              <br /> Mon parcours professionnel varié m'a apporté une
              polyvalence et une approche pragmatique que j'applique avec
              enthousiasme dans le domaine du développement. Ce portfolio est le
              reflet de mon engagement à acquérir de nouvelles compétences et à
              relever des défis stimulants. Explorez mes projets et découvrez
              comment ma passion pour le code se traduit en solutions web
              dynamiques et fonctionnelles.
            </p>
          </div>
        </div>
        <Competences />
      </div>
    </section>
  );
}

export default About;
