import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCards } from "../../redux/actions";
import { setCurrentPage, setValue } from "../../redux/slices/fetchData";

import { FiSearch } from "react-icons/fi";

const Search: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch<AppDispatch>();

  const clickToSearch = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCards({ value }));
  };

  const handleChange = (event: any) => {
    dispatch(setValue(event.target.value));
  };

  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={(event) => handleChange(event)}
        placeholder="Search your character"
      />
      <button className="search-button" onClick={() => clickToSearch()}>
        <FiSearch />
      </button>
    </form>
  );
};

export default Search;
