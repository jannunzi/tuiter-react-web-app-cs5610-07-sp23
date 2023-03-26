import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import counterReducer from "./counter-reducer";
import todosReducer from "./todos-reducer";
import tuiterReducer from "./tuiter-reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    todos: todosReducer,
    tuiter: tuiterReducer,
  },
});

export default store;
