/* eslint-disable react/prop-types */
import React from "react";

import AnswerButton from "../UI/AnswerButton";

import classes from "./QuizItem.module.css";

export default function QuizItem(props) {
  return (
    <div>
      <div key={props.id} className={classes.quizlist__quizitem}>
        <h3 className={classes.quizitem__h3}>{props.question}</h3>
        {props.choices.map((choice) => {
          const styles = {
            backgroundColor: choice.isSelected ? "#D6DBF5" : "white",
          };

          const checkAnswerStyle = {
            backgroundColor:
              choice.isSelected && choice.choice === props.correct
                ? "green"
                : choice.isSelected && choice.choice !== props.correct
                ? "red"
                : "grey",
          };

          console.log(checkAnswerStyle);

          return (
            <AnswerButton
              key={choice.id}
              onClick={() => {
                props.holdAnswer(choice.id);
              }}
              style={props.endQuiz ? checkAnswerStyle : styles}
            >
              {choice.choice}
            </AnswerButton>
          );
        })}
      </div>
    </div>
  );
}
