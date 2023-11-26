import { useState, useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import './style/index.css';
import Projets from '../../../projets.json';

const MyComponent = ({ selectedSlide, closeModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const closeModalHandler = useCallback(() => {
    setModalIsOpen(false);
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModalHandler();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModalHandler]);

  const modalWidth = windowWidth > 1024 ? '60%' : '90%';
  const modalHeight = windowWidth > 1024 ? '95%' : 'auto';
  const modalMargin = windowWidth > 1024 ? '10px' : '0';
  const topPosition = windowWidth > 1024 ? '2%' : '10%';
  const leftPosition = windowWidth > 1024 ? '50%' : '50%';
  const translateValue =
    windowWidth > 1024 ? `translate(-50%, 0%)` : 'translate(-50%, -5%)';

  const imagesModal = Projets[selectedSlide].images;
  const technoModal = Projets[selectedSlide].techno;

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModalHandler}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 150 },
          content: {
            width: modalWidth,
            height: modalHeight,
            margin: modalMargin,
            top: topPosition,
            left: leftPosition,
            transform: translateValue,
            zIndex: 151,
            background:
              'linear-gradient(135deg, rgba(202, 188, 221, 1), rgba(198, 242, 255, 1))',
            borderRadius: '10px',
            boxSizing: 'border-box',
          },
        }}
      >
        {/* contenu de la modal */}
        <div className="modal-content">
          <div className="titre-croix">
            <h3>{Projets[selectedSlide].title}</h3>
            <button onClick={closeModalHandler}>✖️</button>
          </div>
          <div className="intro-modal">
            <div className="img-cover-modal">
              <img
                src={Projets[selectedSlide].cover}
                alt={Projets[selectedSlide].title}
              />
            </div>
            <div className="description-et-techno">
              {' '}
              <a
                href={Projets[selectedSlide].lien}
                target="_blank"
                rel="noopener noreferrer"
              >
                lien du projet
              </a>
              <p className="text-description">
                {Projets[selectedSlide].description}
              </p>
              <p className="techno-title">Les technos:</p>
              <div className="technos">
                {technoModal.map((element, index) => (
                  <div className="techno-modal" key={index}>
                    {element}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="images-details">
            {imagesModal.map((image, index) => (
              <div className="image-detail" key={image.idImage}>
                <img src={image.urlImage} alt={Projets[selectedSlide].title} />
              </div>
            ))}
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default MyComponent;
