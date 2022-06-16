import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import {
  createStore,
  combineReducers,
} from "redux";
import { Provider } from "react-redux";

const commentReducer = (state = 0, action) => {
  if (action.type === "SEND_COMMENT") {
    state += action.payload;
  }
  return state;
};
const supportReducer = (state = 0, action) => {
  if (action.type === "SEND_SUPPORT") {
    state += action.payload;
  }
  return state;
};
const feelingReducer = (state = 0, action) => {
  if (action.type === "SEND_FEELING") {
    state += action.payload;
  }
  return state;
};
const understandingReducer = (state = 0, action) => {
  if (action.type === "SEND_UNDERSTANDING") {
    state += action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    commentReducer,
    feelingReducer,
    supportReducer,
    understandingReducer,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
