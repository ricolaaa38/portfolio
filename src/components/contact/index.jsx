import './style/index.css';
import AnimationBanner from '../banner/animated-background/index';
import UseIntersectionObserver from '../function/IntersectionObserver';
import { useState } from 'react';

function Contact() {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    form: {
      name: '',
      firstname: '',
      email: '',
      sujet: '',
      message: '',
    },
  });

  // fonction pour réinitialiser le formulaire aprés confirmation de l'envoi
  const resetForm = () => {
    setFormData({
      form: {
        name: '',
        firstname: '',
        email: '',
        sujet: '',
        message: '',
      },
    });
    setIsEmailValid(true);
    setIsSubmitSuccess(false);
    console.log('Form after reset:', formData);

    document.getElementById('contactForm').reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setIsEmailValid(isValidEmail);
    }

    setFormData({
      ...formData,
      form: {
        ...formData.form,
        [name]: value,
      },
    });
  };

  // fonction pour verifier le remplissage de l'ensemble des champs du formulaire
  const isFormDataValid = () => {
    return (
      formData.form.name.trim() !== '' &&
      formData.form.firstname.trim() !== '' &&
      formData.form.email.trim() !== '' &&
      formData.form.sujet.trim() !== '' &&
      formData.form.message.trim() !== '' &&
      isEmailValid
    );
  };

  // fonction pour gérer le submit du formulaire et l'envoyé sur la bdd
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormDataValid()) {
      console.error('Veuillez remplir tous les champs correctement.');
      setIsFormValid(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/formulaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Données envoyées avec succès');
        setIsFormValid(true);
        setIsSubmitSuccess(true);
        setTimeout(() => {
          resetForm();
        }, 2000);
      } else {
        console.error("Erreur lors de l'envoi des données");
        setIsFormValid(false);
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      setIsFormValid(false);
    }
  };
  // gestion de l'aniamation a l'apparition sur l'écran
  UseIntersectionObserver('.hidden');

  return (
    <section className="portfolio-contact" id="contact">
      <AnimationBanner />
      <div className="contact-content">
        <div className="intro-contact hidden">
          <h2>Me contacter</h2>
          <p>
            Vous pouvez me contacter par mail:{' '}
            <strong>nicolas.cretton@orange.fr</strong> <br />
            ou via le formulaire ci-contre
          </p>
        </div>
        {isFormValid || (
          <p className="error-submit-message">
            Veuillez remplir tous les champs correctement.
          </p>
        )}
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="label-container">
            <div className="label-input-container">
              <label htmlFor="name">Votre nom</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Dupont"
                value={formData.form.name}
                onChange={handleChange}
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="firstname">Votre prénom</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Martin"
                value={formData.form.firstname}
                onChange={handleChange}
              />
            </div>
          </div>
          <label htmlFor="email">Votre adresse E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="monadresse@email.com"
            value={formData.form.email}
            onChange={handleChange}
            className={!isEmailValid ? 'invalid' : ''}
          />
          {!isEmailValid && (
            <p className="error-message">
              Veuillez entrer une adresse email valide.
            </p>
          )}
          <label htmlFor="sujet">Sujet</label>
          <select name="sujet" id="sujet" onChange={handleChange}>
            <option value=""></option>
            <option value="mesProjets">
              Une question sur l'un de mes projets?
            </option>
            <option value="newProjets">Un nouveau projet à discuter ?</option>
            <option value="autre">Autre</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Bonjour, je vous contacte car ..."
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
        {isSubmitSuccess && (
          <div className="confirmation-popup">
            <p>Merci ! Votre formulaire a été envoyé avec succès.</p>
            <button onClick={() => setIsSubmitSuccess(false)}>✖️</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
