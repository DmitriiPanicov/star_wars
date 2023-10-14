import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentCard } from "../../redux/actions";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate, useParams } from "react-router-dom";

const CurrentCard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentCard, currentCardStatus } = useSelector(
    (state: RootState) => state.cards
  );
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchCurrentCard(+id!));
  }, []);

  return (
    <>
      {currentCardStatus !== "loading" ? (
        <div>
          <p>Name: {currentCard.name}</p>
          <p>Gender: {currentCard.gender}</p>
          <p>Height: {currentCard.height} cm</p>
          <p>Mass: {currentCard.mass} kg</p>
          <p>Yey color: {currentCard.eye_color}</p>
        </div>
      ) : (
        "Loading"
      )}
      <button onClick={() => navigate(`/`)}>Back to list</button>
    </>
  );
};

export default CurrentCard;
