import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
  const [feeling, setFeeling] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const feelingChange = () => {
    setFeeling(event.target.value);
  };

  const sendFeeling = () => {
    dispatch({
      type: "SEND_FEELING",
      payload: feeling,
    });
    console.log(feeling);
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
