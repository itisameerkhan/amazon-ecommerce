import "./Card.scss";

const Card = (props) => {
  const { name, price, description, imageURL, specification } = props.data;


  return (
    <div className="card">
        <img src={imageURL} alt="card" />
        <p className="name">{name}</p>
    </div>
  );
};

export default Card;
