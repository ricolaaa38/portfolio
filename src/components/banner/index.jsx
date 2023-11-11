import './style/index.css';
import AnimatedBanner from './animated-background';
import AnimatedBannerImage from './animated-image';

function Banner() {
  return (
    <section className="portfolio-banner" id="banner">
      <AnimatedBanner />
      <AnimatedBannerImage />
    </section>
  );
}

export default Banner;
