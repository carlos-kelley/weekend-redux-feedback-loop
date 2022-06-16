import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
  const [support, setSupport] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const supportChange = () => {
    setSupport(event.target.value);
  };

  const sendSupport = () => {
    dispatch({
      type: "SEND_SUPPORT",
      payload: support,
    });
    console.log(support);
    if (
      support !== null &&
      support > 0 &&
      support < 6
    ) {
      history.push("/comments");
    } else {
      alert(
        "Please enter a number between 1 and 5"
      );
    }
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <p>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rate your support"
          onChange={supportChange}
        ></input>
        <button onClick={sendSupport}>
          Next
        </button>
      </p>
    </div>
  );
}

export default Support;
