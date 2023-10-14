import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk<any, any>(
  "fetchData/fetchCards",
  async ({ value }: { value: string }, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const res = await axios.get(
      `https://swapi.dev/api/people/?${
        value ? `search=${value}&` : ""
      }${`page=${state.cards.currentPage.toString()}`}`
    );
    return res.data;
  }
);

export const fetchCurrentCard = createAsyncThunk<any, number>(
  "fetchData/fetchCurrentCard",
  async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    return res.data;
  }
);
