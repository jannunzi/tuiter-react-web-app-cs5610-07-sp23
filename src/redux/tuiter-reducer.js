import { createSlice } from "@reduxjs/toolkit";
import {
  findAllTuitsThunk,
  createTuitThunk,
  updateTuitThunk,
  deleteTuitThunk,
} from "../services/tuiter-thunks";
const initialState = {
  tuits: [],
  error: null,
  loading: false,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  reducers: {
    // addTuit: (state, { payload }) => {
    //   state.tuits = [...state.tuits, payload];
    // },
    // deleteTuit: (state, { payload }) => {
    //   state.tuits = state.tuits.filter((tuit) => tuit._id !== payload._id);
    // },
    // updateTuit: (state, { payload }) => {
    //   state.tuits = state.tuits.map((tuit) =>
    //     tuit._id === payload._id ? payload : tuit
    //   );
    // },
  },
  extraReducers: {
    [findAllTuitsThunk.fulfilled]: (state, { payload }) => {
      state.tuits = payload;
      state.loading = false;
    },
    [findAllTuitsThunk.rejected]: (state, { payload }) => {
      state.tuits = [];
      state.error = payload;
      state.loading = false;
    },
    [findAllTuitsThunk.pending]: (state) => {
      state.loading = true;
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.tuits = [...state.tuits, payload];
      state.loading = false;
    },
    [createTuitThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [createTuitThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.tuits = state.tuits.map((tuit) =>
        tuit._id === payload._id ? payload : tuit
      );
      state.loading = false;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.tuits = state.tuits.filter((tuit) => tuit._id !== payload);
      state.loading = false;
    },
  },
});

export default tuitsSlice.reducer;
export const { addTuit, deleteTuit, updateTuit } = tuitsSlice.actions;
