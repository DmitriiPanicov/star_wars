import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  increment,
  decrement,
  setCurrentPage,
} from "../../redux/slices/fetchData";
import { fetchCards } from "../../redux/actions";
import ArrayOfPages from "./ArrayOfPages";

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { value, nextPage, prevPage, cardsStatus } = useSelector(
    (state: RootState) => state.cards
  );

  const onClickPrev = () => {
    dispatch(decrement());
    dispatch(fetchCards({ value }));
  };

  const onClickNext = () => {
    dispatch(increment());
    dispatch(fetchCards({ value }));
  };

  return (
    <div className="pagination wrap">
      {prevPage !== null ? (
        <button
          className="pagination__arrow"
          onClick={onClickPrev}
          disabled={cardsStatus === "loading"}
        >{`<`}</button>
      ) : (
        ""
      )}
      <ArrayOfPages />
      {nextPage !== null ? (
        <button
          className="pagination__arrow"
          onClick={onClickNext}
          disabled={cardsStatus === "loading"}
        >
          {`>`}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
