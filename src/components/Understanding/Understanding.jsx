import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  const [understanding, setUnderstanding] =
    useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const understandingChange = () => {
    setUnderstanding(event.target.value);
  };

  const sendUnderstanding = () => {
    dispatch({
      type: "SEND_UNDERSTANDING",
      payload: understanding,
    });
    history.push("/support");
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
