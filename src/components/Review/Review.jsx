//imports
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Review() {
  //use history
  const history = useHistory();
  //declare selectors
  const feeling = useSelector(
    (store) => store.feelingReducer
  );
  const understanding = useSelector(
    (store) => store.understandingReducer
  );
  const support = useSelector(
    (store) => store.supportReducer
  );
  const comments = useSelector(
    (store) => store.commentsReducer
  );

  const sendFeedback = () => {
    //set the feedback object
    const newFeedback = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments,
    };
    //axios post request
    axios
      .post("/feedback", newFeedback)
      .then((response) => {
        console.log(response.data);
        history.push("/success");
      })
      .catch((err) => {
        console.log(err);
        alert("error adding feedback");
      });
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={sendFeedback}>
        Submit
      </button>
    </div>
  );
}
export default Review;