import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Blocks } from "react-loader-spinner";

import { fetchCards } from "../../redux/actions";
import Search from "../../components/Search/Search";
import CardItem from "../../components/CardItem/CardItem";
import { AppDispatch, RootState } from "../../redux/store";
import Pagination from "../../components/Pagination/Pagination";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value, cards, cardsStatus } = useSelector(
    (state: RootState) => state.cards
  );

  React.useEffect(() => {
    dispatch(fetchCards({ value }));
  }, []);

  if (cardsStatus === "error") {
    alert("Oops, we got some problems");
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
          wrapperClass="blocks-wrapper"
        />
      ) : (
        <>
          {cards.length ? (
            <div className="cardItems-grid">
              {cards.map((card) => (
                <CardItem key={card["name"]} card={card} />
              ))}
            </div>
          ) : (
            "Nothing found for your search"
          )}
        </>
      )}
    </>
  );
};

export default Home;
