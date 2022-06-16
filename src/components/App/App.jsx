import React from "react";
import "./App.css";
import {
  Route,
  HashRouter as Router,
} from "react-router-dom";
import Axios from "axios";
import Comments from "../Comments/Comments.jsx";
import Feeling from "../Feeling/Feeling.jsx";
import Support from "../Support/Support.jsx";
import Understanding from "../Understanding/Understanding.jsx";
import Review from "../Review/Review.jsx";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/feeling">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
