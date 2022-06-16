import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const navToFeeling = () => {
      const history = useHistory();
    history.push("/feeling");
  };

  return (
    <div>
      <p>{comments}</p>
      <h1 onClick={navToFeeling}>ENTER SITE</h1>
    </div>
  );
}

export default Home;
