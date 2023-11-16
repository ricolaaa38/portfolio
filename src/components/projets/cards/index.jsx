import './style/index.css';

function Card({ cover, title, id }) {
  return (
    <div className="projets-card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
