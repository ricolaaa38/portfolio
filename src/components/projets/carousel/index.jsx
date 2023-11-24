import Chevron from '../../../assets/chevron.svg';
import { useState } from 'react';
import './style/index.css';
import MyComponent from '../modal';

function Carousel({ projets }) {
  const [slide, setSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setSlide(slide === projets.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? projets.length - 1 : slide - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      <img
        src={Chevron}
        alt="chevron-left"
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      <div className="img-prev-prev" onClick={prevSlide} key={prevSlide.index}>
        <img
          src={projets[(slide - 2 + projets.length) % projets.length].cover}
          alt="previous"
        />
      </div>
      <div className="img-prev" onClick={prevSlide} key={prevSlide.index}>
        <img
          src={projets[(slide - 1 + projets.length) % projets.length].cover}
          alt="previous"
        />
      </div>
      {projets.map((element, index) => (
        <div
          key={index}
          className={slide === index ? 'slide' : 'slide slide-hidden'}
          onClick={openModal}
        >
          {' '}
          <div className="projets-card">
            <img src={element.cover} alt={element.title} />
            <h3>{element.title}</h3>
          </div>
        </div>
      ))}
      <div className="img-next" onClick={nextSlide} key={nextSlide.index}>
        <img src={projets[(slide + 1) % projets.length].cover} alt="next" />
      </div>
      <div className="img-next-next" onClick={nextSlide} key={nextSlide.index}>
        <img src={projets[(slide + 2) % projets.length].cover} alt="next" />
      </div>
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
            alt="bouttons déplacement carousel"
          >
            .
          </button>
        ))}
      </span>
      {isModalOpen && (
        <MyComponent
          closeModal={closeModal}
          projets={projets}
          selectedSlide={slide}
        />
      )}
    </div>
  );
}

export default Carousel;
