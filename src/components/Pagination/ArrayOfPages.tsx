import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/fetchData";
import { fetchCards } from "../../redux/actions";

const ArrayOfPages: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { value, currentPage, numberOfCards, cardsStatus } = useSelector(
    (state: RootState) => state.cards
  );

  const onClickPage = (i: number) => {
    dispatch(setCurrentPage(i + 1));
    dispatch(fetchCards({ value }));
  };

  const numberOfPages = Math.ceil(numberOfCards / 10);

  return (
    <>
      {[...Array(numberOfPages)].map((_, i) => (
        <button
          className={`${i + 1 === currentPage ? "active" : ""}`}
          onClick={() => onClickPage(i)}
          disabled={cardsStatus === "loading"}
          key={i}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
};

export default ArrayOfPages;
