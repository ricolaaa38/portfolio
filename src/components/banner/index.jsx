import './style/index.css';
import AnimatedBanner from './animated-background';
import AnimatedBannerImage from './animated-image';
import AnimatedBannerText from './animated-text';

function Banner() {
  return (
    <section className="portfolio-banner" id="banner">
      <AnimatedBanner />
      <div className="banner-content">
        <div className="banner-text">
          <AnimatedBannerText />
        </div>
        <div className="banner-image">
          <AnimatedBannerImage />
        </div>
      </div>
    </section>
  );
}

export default Banner;
