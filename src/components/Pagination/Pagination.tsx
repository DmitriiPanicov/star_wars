import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { increment, decrement } from "../../redux/slices/fetchData";
import { fetchCards } from "../../redux/slices/fetchData";

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { value, currentPage } = useSelector((state: RootState) => state.cards);

  const onClickPrev = () => {
    dispatch(decrement());
    dispatch(fetchCards({ value }));
  };

  const onClickNext = () => {
    dispatch(increment());
    dispatch(fetchCards({ value }));
  };

  return (
    <>
      <span onClick={onClickPrev}>prev</span>
      <span>{currentPage}</span>
      <span onClick={onClickNext}>next</span>
    </>
  );
};

export default Pagination;
