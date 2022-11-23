import React from "react";

import AnswerButton from "../UI/AnswerButton";

import classes from "./QuizItem.module.css";

export default function QuizItem(props) {
  return (
    <div className={classes.quizlist__quizitem}>
      <h3 className={classes.quizitem__h3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        tenetur?
      </h3>
      <div className={classes.quizitem__answers}>
        <AnswerButton>ANSWER</AnswerButton>
        <AnswerButton>ANSWER</AnswerButton>
        <AnswerButton>ANSWER</AnswerButton>
        <AnswerButton>ANSWER</AnswerButton>
      </div>
    </div>
  );
}
