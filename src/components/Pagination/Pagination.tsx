import React from "react";

import { useSelector, useDispatch } from "react-redux";

import ArrayOfPages from "./ArrayOfPages";
import { fetchCards } from "../../redux/actions";
import { RootState, AppDispatch } from "../../redux/store";
import { increment, decrement } from "../../redux/slices/fetchData";

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
        >{`>`}</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
