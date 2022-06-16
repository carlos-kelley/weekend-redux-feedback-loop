//imports
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

//declare reducers
const commentsReducer = (state = null, action) => {
  if (action.type === "SEND_COMMENT") {
    state = action.payload;
  }
  return state;
};
const supportReducer = (state = null, action) => {
  if (action.type === "SEND_SUPPORT") {
    state = action.payload;
  }
  return state;
};
const feelingReducer = (state = null, action) => {
  if (action.type === "SEND_FEELING") {
    state = action.payload;
  }
  return state;
};
const understandingReducer = (state = null, action) => {
  if (action.type === "SEND_UNDERSTANDING") {
    state = action.payload;
  }
  return state;
};

//combine reducers and create store
const store = createStore(
  combineReducers({
    commentsReducer,
    feelingReducer,
    supportReducer,
    understandingReducer,
  })
);

//render app with provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
