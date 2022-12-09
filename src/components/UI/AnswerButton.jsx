/* eslint-disable react/prop-types */
import React from "react";

import classes from "./AnswerButton.module.css";

export default function AnswerButton(props) {
  return (
    <button
      className={classes.answerbutton}
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
      name={props.name}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
