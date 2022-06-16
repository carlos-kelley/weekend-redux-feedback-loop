import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
  const [feeling, setFeeling] = useState(0);
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
    history.push("/understanding");
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <p>
        <input
          type="number"
          placeholder="Rate your feeling"
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
