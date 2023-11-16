import Chevron from '../../../assets/chevron.svg';
import { useState } from 'react';
import './style/index.css';

function Carousel({ projets }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === projets.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? projets.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <img
        src={Chevron}
        alt="chevron-left"
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      {projets.map((element, index) => (
        <div
          key={index}
          className={slide === index ? 'slide' : 'slide slide-hidden'}
        >
          {' '}
          <div className="projets-card">
            <img src={element.cover} alt={element.title} />
            <h3>{element.title}</h3>
          </div>
        </div>
      ))}
      <img
        src={Chevron}
        alt="chevron-right"
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {projets.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={
              slide === index ? 'indicator' : 'indicator indicator-inactive'
            }
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Carousel;
