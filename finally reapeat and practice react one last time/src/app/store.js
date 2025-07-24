import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";
import { loadState, saveState } from "../utils/localStorage";

const preloadedState = {
  todo: loadState() || { todos: [{ id: 1, text: "Hello world!" }] },
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().todo);
});

export default store;
