//imports
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Feeling() {
  //declare state variables
  const [feeling, setFeeling] = useState(null);
  //use the comment selector
  const comments = useSelector(
    (store) => store.commentsReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();

  //function to handle feeling input
  const feelingChange = () => {
    setFeeling(event.target.value);
  };

  //function to send feeling dispatch
  const sendFeeling = () => {
    dispatch({
      type: "SEND_FEELING",
      payload: feeling,
    });
    console.log(feeling);
    //if entry is not null and is 1-5, navigate to understanding page, otherwise alert
    if (
      feeling !== null &&
      feeling > 0 &&
      feeling < 6
    ) {
      history.push("/understanding");
    } else {
      alert(
        "Please enter a number between 1 and 5"
      );
    }
  };

  return (
    <div>
      <p>{comments}</p>
      <h1>How are you feeling today?</h1>
      <p>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rate your feeling 1-5"
          onChange={feelingChange}
        ></input>
        <button onClick={sendFeeling}>
          Next
        </button>
      </p>
    </div>
  );
}

export default Feeling;