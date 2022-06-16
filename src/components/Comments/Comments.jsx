// IMPORTS
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//BEGINNING OF COMMENTS COMPONENT
function Comments() {
  //declare state variables
  const [comment, setComment] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  //function to handle comment input
  const commentChange = () => {
    setComment(event.target.value);
  };

  //function to send comment dispatch
  const sendComment = () => {
    dispatch({
      type: "SEND_COMMENT",
      payload: comment,
    });
    console.log(comment);
    //navigate to review page
    history.push("/review");
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <p>
        <input
          type="text"
          placeholder="Enter comment"
          onChange={commentChange}
        ></input>
        <button onClick={sendComment}>
          Next
        </button>
      </p>
    </div>
  );
}

export default Comments;