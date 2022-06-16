//import
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
  //use history and dispatch and state variables
  const [support, setSupport] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  //function to handle support input
  const supportChange = () => {
    setSupport(event.target.value);
  };

  const sendSupport = () => {
    //send support dispatch
    dispatch({
      type: "SEND_SUPPORT",
      payload: support,
    });
    console.log(support);
    //if entry is not null and is 1-5, navigate to review page, otherwise alert
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