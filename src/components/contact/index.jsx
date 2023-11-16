import './style/index.css';
import AnimationBanner from '../banner/animated-background/index';
import UseIntersectionObserver from '../function/IntersectionObserver';

function Contact() {
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
        <form action="#" method="post">
          <div className="label-container">
            <div className="label-input-container">
              <label htmlFor="name">Votre nom</label>
              <input type="text" name="name" id="name" placeholder="Dupont" />
            </div>
            <div className="label-input-container">
              <label htmlFor="firstname">Votre prénom</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Martin"
              />
            </div>
          </div>
          <label htmlFor="email">Votre adresse E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="monadresse@email.com"
          />
          <label htmlFor="message">Une demande en particulier ?</label>
          <textarea
            name="message"
            id="message"
            placeholder="Bonjour, je vous contacte car ..."
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
