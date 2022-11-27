/* eslint-disable react/prop-types */
import React from "react";

import AnswerButton from "../UI/AnswerButton";

import classes from "./QuizItem.module.css";

export default function QuizItem(props) {
  return (
    <div>
      {props.quizzes.map((quiz) => (
        <div key={quiz.id} className={classes.quizlist__quizitem}>
          <h3 className={classes.quizitem__h3}>{quiz.question}</h3>
          {quiz.choices.map((choice, index) => {
            return <AnswerButton key={index}>{choice}</AnswerButton>;
          })}
        </div>
      ))}
    </div>
  );
}
