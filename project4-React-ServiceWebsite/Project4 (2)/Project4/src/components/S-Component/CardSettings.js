import "../S-Style/Body.scss";
//import Weather from "./Weather/Weather";

const Cards = ({ CardSettings }) => {
  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <div className="Card">
          <caption>{card.Caption}</caption>
          <div className="CardBody">
            <div className="Item1">
              <b>{card.Label1}</b>
              <p>{card.Label1_Ans}</p>
            </div>
            <div className="Item1">
              <b>{card.Label2}</b>
              <p>{card.Label2_Ans}</p>
            </div>
            <div className="Item1">
              <b>{card.Label3}</b>
              <a
                href="#"
                style={{
                  color: "#7d0dd3",
                  textDecoration: "none",
                }}
              >
                {card.Label3_Ans}
              </a>
            </div>
            <div className="Item1">
              <b>{card.Label4}</b>
              <a
                href="#"
                style={{
                  color: "#7d0dd3",
                  textDecoration: "none",
                }}
              >
                {card.Label4_Ans}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // Start Card
    <div className="Card-Container">{CardSettings.map(renderCard)}</div>
    //End Card
  );
};

export default Cards;
