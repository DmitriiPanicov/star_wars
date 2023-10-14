import React from "react";

import { FiSearch } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../../redux/actions";
import { AppDispatch, RootState } from "../../redux/store";
import { setCurrentPage, setValue } from "../../redux/slices/fetchData";

const Search: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch<AppDispatch>();

  const clickToSearch = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCards({ value }));
  };

  const clickToRefresh = () => {
    dispatch(setValue(""));
    dispatch(fetchCards({ value: "" }));
  };

  const handleChange = (event: any) => {
    dispatch(setValue(event.target.value));
  };

  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      {value ? (
        <HiOutlineRefresh className="search-refresh" onClick={clickToRefresh} />
      ) : (
        ""
      )}
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={(event) => handleChange(event)}
        placeholder="Search your character"
      />
      <button className="search-button" onClick={clickToSearch}>
        <FiSearch />
      </button>
    </form>
  );
};

export default Search;
