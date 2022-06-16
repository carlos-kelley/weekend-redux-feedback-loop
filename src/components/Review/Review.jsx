import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
    //   const [feeling, setFeeling] = useState(0);
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
            <h1>Review Your Feedback</h1>
            <p>
                Feelings:
            </p>
            <p>
                Understanding:
            </p>
            <p>
                Support:
            </p>
            <p>
                Comments:
            </p>
        </div>
    );
}
export default Review;
