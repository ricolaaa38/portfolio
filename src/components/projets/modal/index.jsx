import { useState, useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import './style/index.css';

const MyComponent = ({ projets, selectedSlide, closeModal }) => {
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

  const modalWidth = windowWidth > 768 ? '50%' : '90%';
  const modalMargin = windowWidth > 768 ? 'auto' : '0';
  const topPosition = windowWidth > 768 ? '10%' : '15%';
  const leftPosition = windowWidth > 768 ? '50%' : '50%';
  const translateValue =
    windowWidth > 768 ? `translate(-50%, 0%)` : 'translate(-50%, -5%)';

  const imagesModal = projets[selectedSlide].images;
  const technoModal = projets[selectedSlide].techno;

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
            margin: modalMargin,
            top: topPosition,
            left: leftPosition,
            transform: translateValue,
            zIndex: 151,
            background:
              'linear-gradient(135deg, rgba(202, 188, 221, 1), rgba(198, 242, 255, 1))',
            borderRadius: '10px',
          },
        }}
      >
        {/* contenu de la modal */}
        <div className="modal-content">
          <div className="titre-croix">
            <h3>{projets[selectedSlide].title}</h3>
            <button onClick={closeModalHandler}>✖️</button>
          </div>
          <div className="intro-modal">
            <div className="img-cover-modal">
              <img
                src={projets[selectedSlide].cover}
                alt={projets[selectedSlide].title}
              />
            </div>
            <div className="description-et-techno">
              <p>{projets[selectedSlide].description}</p>
              <p>Les technos:</p>
              <div className="technos">
                {technoModal.map((element, index) => (
                  <div className="techno-modal" key={index}>
                    {element}
                  </div>
                ))}
              </div>
              <a
                href={projets[selectedSlide].lien}
                target="_blank"
                rel="noopener noreferrer"
              >
                lien du projet
              </a>
            </div>
          </div>
          <div className="images-details">
            {imagesModal.map((image, index) => (
              <div className="image-detail" key={image.idImage}>
                <img src={image.urlImage} alt={projets[selectedSlide].title} />
              </div>
            ))}
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default MyComponent;
