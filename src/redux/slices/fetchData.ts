import { createSlice } from "@reduxjs/toolkit";
import { fetchCards, fetchCurrentCard } from "../actions";

type CurrentCardType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: [];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

interface dataState {
  cards: [];
  cardsStatus: string;
  currentCard: CurrentCardType;
  currentCardStatus: string;
  currentPage: number;
  value: string;
  numberOfCards: number;
  prevPage: string | null;
  nextPage: string | null;
}

const initialState: dataState = {
  cards: [],
  cardsStatus: "loading", //loading | success | error
  currentCard: {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  },
  currentCardStatus: "loading", //loading | success | error
  currentPage: 1,
  numberOfCards: 0,
  prevPage: "",
  nextPage: "",
  value: "",
};

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    increment: (state: any) => {
      state.currentPage = state.currentPage + 1;
      console.log(state.currentPage);
    },
    decrement: (state: any) => {
      state.currentPage = state.currentPage - 1;
      console.log(state.currentPage);
    },
    setValue: (state, action) => {
      state.value = action.payload;
      console.log("action.payload: ", action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      console.log("action.payload: ", action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.cardsStatus = "loading";
    });

    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cardsStatus = "success";
      state.cards = action.payload.results;
      state.numberOfCards = action.payload.count;
      state.nextPage = action.payload.next;
      state.prevPage = action.payload.previous;
      console.log(action.payload);
    });

    builder.addCase(fetchCards.rejected, (state) => {
      state.cardsStatus = "error";
    });

    builder.addCase(fetchCurrentCard.pending, (state) => {
      state.currentCardStatus = "loading";
    });

    builder.addCase(fetchCurrentCard.fulfilled, (state, action) => {
      state.currentCardStatus = "success";
      state.currentCard = action.payload;
    });

    builder.addCase(fetchCurrentCard.rejected, (state) => {
      state.currentCardStatus = "error";
    });
  },

  // extraReducers: {
  //   [fetchCards.pending]: (state) => {
  //     state.cardsStatus = "loading";
  //     console.log("LOADING");
  //   },
  //   [fetchCards.fulfilled]: (state, action) => {
  //     state.cardsStatus = "success";
  //     state.cards = action.payload;
  //   },
  //   [fetchCards.rejected]: (state) => {
  //     state.cardsStatus = "error";
  //   },
  //   [fetchCurrentCard.pending]: (state) => {
  //     state.currentCardStatus = "loading";
  //     console.log("LOADING");
  //   },
  //   [fetchCurrentCard.fulfilled]: (state, action) => {
  //     state.currentCardStatus = "success";
  //     state.currentCard = action.payload;
  //   },
  //   [fetchCurrentCard.rejected]: (state) => {
  //     state.currentCardStatus = "error";
  //   },
  // },
});

export const { increment, decrement, setValue, setCurrentPage } =
  cardsSlice.actions;

export default cardsSlice.reducer;
