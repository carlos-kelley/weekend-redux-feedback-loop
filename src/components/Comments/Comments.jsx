import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
  const [comment, setComment] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const commentChange = () => {
    setComment(event.target.value);
  };

  const sendComment = () => {
    dispatch({
      type: "SEND_COMMENT",
      payload: comment,
    });
    console.log(comment);
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
