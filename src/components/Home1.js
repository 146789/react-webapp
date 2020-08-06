import React from "react";
import data from "../data/data.json";
const Home1 = () => {
  const card_detils = data.profile;

  console.log(data);

  const renderCard = (card, index) => {
    return (
      <div
        className="card"
        key={index}
        style={{ width: "300px", alignItems: "center" }}
      >
        <img
          variant="top"
          src={card.details.image}
          style={{
            width: "100px",
            height: "200px",
            margin: "1%",
            alignContent: "center",
          }}
        ></img>
        <div className="card-body">
          <p className="hbhj">{card.details.name}</p>
        </div>
      </div>
    );
  };

  return <div className="row">{card_detils.map(renderCard)}</div>;
};

export default Home1;
