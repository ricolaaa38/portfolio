import './style/index.css';
import PhotoGaspard from '../../assets/gaspard.png';
import AnimatedBanner from './animated-background';

function Banner() {
  return (
    <section className="portfolio-banner" id="banner">
      <AnimatedBanner />
      <div className="presentation">
        <h1>
          Bonjour!
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          <br />
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          <br />
        </h1>
        <div className="img-banner">
          <img src={PhotoGaspard} alt="chat" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
