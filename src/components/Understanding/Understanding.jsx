//import 
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  //use history and dispatch and state variables
  const [understanding, setUnderstanding] =
    useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const understandingChange = () => {
    //set understanding state variable
    setUnderstanding(event.target.value);
  };

  const sendUnderstanding = () => {
    //send understanding dispatch
    dispatch({
      type: "SEND_UNDERSTANDING",
      payload: understanding,
    });
    console.log(understanding);
    //if entry is not null and is 1-5, navigate to support page, otherwise alert
    if (
      understanding !== null &&
      understanding > 0 &&
      understanding < 6
    ) {
      history.push("/support");
    } else {
      alert(
        "Please enter a number between 1 and 5"
      );
    }
  };

  return (
    <div>
      <h1>
        How well are you understanding the
        content?
      </h1>
      <p>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rate your understanding"
          onChange={understandingChange}
        ></input>
        <button onClick={sendUnderstanding}>
          Next
        </button>
      </p>
    </div>
  );
}

export default Understanding;