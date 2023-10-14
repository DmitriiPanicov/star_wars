import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../../redux/actions";

import CardItem from "../../components/CardItem/CardItem";
import { AppDispatch, RootState } from "../../redux/store";

import Pagination from "../../components/Pagination/Pagination";
import { Blocks } from "react-loader-spinner";
import Search from "../../components/Search/Search";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value, cards, cardsStatus } = useSelector(
    (state: RootState) => state.cards
  );

  React.useEffect(() => {
    dispatch(fetchCards({ value }));
  }, []);

  if (cardsStatus === "error") {
    <span>ERROR</span>;
  }

  return (
    <>
      <Search />
      <Pagination />
      {cardsStatus === "loading" ? (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      ) : (
        <div className="cardItems-grid">
          {cards.length ? cards.map((card) => (
            <CardItem key={card["name"]} card={card} />
          )) : 'Nothing found for your search'}
        </div>
      )}
    </>
  );
};

export default Home;
