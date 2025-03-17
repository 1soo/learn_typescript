import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const 초기값 = { count: 0, user: "kim" };

/*function reducer(state = 초기값, action: any) {
  if (action.type === "증가") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "감소") {
    return { ...state, count: state.count - 1 };
  } else {
    return 초기값;
  }
}

const store = createStore(reducer);*/

// slice 문법의 좋은 점 (state + reducer)
/*
  1. 함수라 보기 좋음
  2. reducer에서 state의 복사본을 만들 필요가 없다.
*/
const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    증가(state) {
      state.count++;
    },
    감소(state) {
      state.count--;
    },
    맘대로증가(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { 증가, 감소, 맘대로증가 } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
