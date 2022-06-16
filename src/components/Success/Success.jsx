import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {

    const history = useHistory();
    const sendHome = () => {
        history.push("/");
    };
    

  //   const [feeling, setFeeling] = useState(null);
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
      <h1>Thanks for your feedback!</h1>
      <button onClick = {sendHome}>Leave New Feedback</button>
    </div>
  );
}

export default Success;
