import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards, setValue } from "../../redux/slices/fetchData";

import CardItem from "../../components/CardItem/CardItem";
import { AppDispatch, RootState } from "../../redux/store";

import Pagination from "../../components/Pagination/Pagination";

const Home: React.FC = () => {
  const { value, cards, cardsStatus } = useSelector(
    (state: RootState) => state.cards
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    //запрос при отрисовке страницы
    dispatch(fetchCards({ value }));
  }, []);

  const clickToSearch = () => {
    //запрос при клике
    dispatch(fetchCards({ value }));
  };

  const handleChange = (event: any) => {
    console.log("event : ", event);
    dispatch(setValue(event.target.value));
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        Искать персонажа
        <input
          type="text"
          value={value}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => clickToSearch()}> Искать</button>
      </form>
      <Pagination />
      {cardsStatus === "success"
        ? cards.length
          ? cards.map((card) => <CardItem key={card["name"]} card={card} />)
          : "По запросу ничего не найдено"
        : cardsStatus}
    </>
  );
};

export default Home;
