//import
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {

  //use history
  const history = useHistory();
  
  //navigate back to feeling page
    const sendHome = () => {
        history.push("/");
    };

  return (
    <div>
      <h1>Thanks for your feedback!</h1>
      <button onClick = {sendHome}>Leave New Feedback</button>
    </div>
  );
}

export default Success;
