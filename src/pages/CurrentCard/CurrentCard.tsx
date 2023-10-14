import React from "react";

import { LuScanFace } from "react-icons/lu";
import { Blocks } from "react-loader-spinner";
import { GiMonkFace, GiNunFace } from "react-icons/gi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { fetchCurrentCard } from "../../redux/actions";
import { AppDispatch, RootState } from "../../redux/store";

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

  const renderIcon = () => {
    return currentCard.gender === "male" ? (
      <GiMonkFace className="currentPage__icon" />
    ) : currentCard.gender === "female" ? (
      <GiNunFace className="currentPage__icon" />
    ) : (
      <LuScanFace className="currentPage__icon" />
    );
  };

  return (
    <div className="currentPage">
      {currentCardStatus !== "loading" ? (
        <div className="currentPage__info">
          {renderIcon()}
          <div className="currentPage__info_column">
            <p>Name: {currentCard.name}</p>
            <p>Gender: {currentCard.gender}</p>
            <p>Height: {currentCard.height} cm</p>
            <p>Mass: {currentCard.mass} kg</p>
          </div>
          <div className="currentPage__info_column">
            <p>Yey color: {currentCard.eye_color}</p>
            <p>Hair color: {currentCard.hair_color}</p>
            <p>Skin color: {currentCard.skin_color}</p>
            <p>Birth_year: {currentCard.birth_year}</p>
          </div>
          <button onClick={() => navigate(`/`)}>
            <AiOutlineDoubleLeft />
          </button>
        </div>
      ) : (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}
    </div>
  );
};

export default CurrentCard;
