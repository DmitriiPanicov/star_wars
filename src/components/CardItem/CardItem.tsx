import React from "react";
import { useNavigate } from "react-router-dom";

type CardItemProps = {
  card: {
    name: string;
    url: string;
    birth_year: string;
    created: string;
    edited: string;
    skin_color: string;
  };
};

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  const navigate = useNavigate();
  const id = card.url.split("/").at(-2);

  const openCard = () => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="cartItem" onClick={() => openCard()}>
      <p>Name: {card.name}</p>
      <p>Birth Year: {card.birth_year !== "unknown" ? card.birth_year : "UNKNOWN"} </p>
      <p>Skin Color: {card.skin_color}</p>
    </div>
  );
};

export default CardItem;
