import Chevron from '../../../assets/chevron.svg';
import { useState } from 'react';
import './style/index.css';
import MyComponent from '../modal';
import Projets from '../../../projets.json';

function Carousel() {
  const [slide, setSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setSlide(slide === Projets.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? Projets.length - 1 : slide - 1);
  };

  const openModalHandler = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
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
          src={Projets[(slide - 2 + Projets.length) % Projets.length].cover}
          alt="previous"
        />
      </div>
      <div className="img-prev" onClick={prevSlide} key={prevSlide.index}>
        <img
          src={Projets[(slide - 1 + Projets.length) % Projets.length].cover}
          alt="previous"
        />
      </div>
      {Projets.map((element, index) => (
        <div
          key={index}
          className={slide === index ? 'slide' : 'slide slide-hidden'}
          onClick={openModalHandler}
        >
          {' '}
          <div className="projets-card">
            <img src={element.cover} alt={element.title} />
            <h3>{element.title}</h3>
          </div>
        </div>
      ))}
      <div className="img-next" onClick={nextSlide} key={nextSlide.index}>
        <img src={Projets[(slide + 1) % Projets.length].cover} alt="next" />
      </div>
      <div className="img-next-next" onClick={nextSlide} key={nextSlide.index}>
        <img src={Projets[(slide + 2) % Projets.length].cover} alt="next" />
      </div>
      <img
        src={Chevron}
        alt="chevron-right"
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {Projets.map((_, index) => (
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
        <MyComponent closeModal={closeModal} selectedSlide={slide} />
      )}
    </div>
  );
}

export default Carousel;
