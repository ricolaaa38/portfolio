import './style/index.css';
import ImagePng from '../../../assets/gaspard.png';

function AnimatedBannerImage() {
  return (
    <section className="animated-pictures">
      <div className="imageBanner">
        <img src={ImagePng} alt="gaspard" />
      </div>
      <div className="cloud1">
        <div className="cloud-main"></div>
        <div className="cloud-center"></div>
        <div className="cloud-right"></div>
      </div>
      <div className="cloud2">
        <div className="cloud-main"></div>
        <div className="cloud-center"></div>
        <div className="cloud-right"></div>
      </div>
    </section>
  );
}

export default AnimatedBannerImage;
