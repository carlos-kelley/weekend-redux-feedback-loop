import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

function Review() {
  const history = useHistory();
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
    const newFeedback = {
      feeling: { feeling },
      understanding: { understanding },
      support: { support },
      comments: { comments },
    };
    console.log(newFeedback);
    Axios.post("/", newFeedback)
      .then((response) => {
        console.log(response.data);
        alert("added feedback");
      })
      .catch((err) => {
        console.log(err);
        alert("error adding feedback");
      });
    history.push("/success");
  };
  //   const [feeling, setFeeling] = useState(0);
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  //   const feelingChange = () => {
  //     setFeeling(event.target.value);
  //   };

  //   const sendFeeling = () => {
  //     dispatch({
  //       type: "SEND_FEELING",
  //       payload: feeling,
  //     });
  //     console.log(feeling);
  //     if (
  //       feeling !== null &&
  //       feeling > 0 &&
  //       feeling < 6
  //     ) {
  //       history.push("/understanding");
  //     } else {
  //       alert(
  //         "Please enter a number between 1 and 5"
  //       );
  //     }
  //   };

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
