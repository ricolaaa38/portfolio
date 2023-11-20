import { useState } from 'react';
import ReactModal from 'react-modal';
import './style/index.css';

const MyComponent = ({ projets, selectedSlide, closeModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModalHandler = () => {
    setModalIsOpen(false);
    closeModal();
  };
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
            width: '50%',
            margin: 'auto',
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
            <button onClick={closeModalHandler}>Fermer</button>
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
