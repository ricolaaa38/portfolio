import './style/index.css';

function Contact() {
  return (
    <section className="portfolio-contact" id="contact">
      <div className="intro-contact">
        <h2>Me contacter</h2>
        <p>
          Vous pouvez me contacter par mail: @@@@@@@@@@@@ <br />
          ou via le formulaire ci-contre
        </p>
      </div>
      <form action="#" method="post">
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="firstname">Prénom</label>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;
