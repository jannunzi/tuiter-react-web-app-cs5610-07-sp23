import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  findAllTuits,
  createTuit,
  updateTuit,
  deleteTuit,
} from "./tuiter-service";

export const findAllTuitsThunk = createAsyncThunk(
  "tuiter/findAllTuits",
  async () => {
    const tuits = await findAllTuits();
    return tuits;
  }
);

export const createTuitThunk = createAsyncThunk(
  "tuiter/createTuit",
  async (tuit) => {
    const tuitCreated = await createTuit(tuit);
    return tuitCreated;
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuiter/updateTuit",
  async (tuit) => {
    const status = await updateTuit(tuit);
    return tuit;
  }
);

export const deleteTuitThunk = createAsyncThunk(
  "tuiter/deleteTuit",
  async (tuitId) => {
    const status = await deleteTuit(tuitId);
    return tuitId;
  }
);
