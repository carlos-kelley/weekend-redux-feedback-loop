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
    history.push("/comments");
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <p>
        <input
          type="number"
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
