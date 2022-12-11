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

          function checkAnswerStyle() {
            if (choice.isSelected && choice.choice === choice.correct) {
              return {
                backgroundColor: "#94D7A2",
                color: "#4D5B9E",
                border: "none",
              };
            } else if (choice.isSelected && choice.choice !== choice.correct) {
              return {
                backgroundColor: "#F8BCBC",
                color: "#4D5B9E",
                border: "none",
              };
            } else if (choice.choice === choice.correct) {
              return {
                backgroundColor: "#94D7A2",
                color: "#4D5B9E",
                border: "none",
              };
            } else {
              return {
                color: "#bfc0c0",
                border: "1px solid #bfc0c0",
                backgroundColor: "white",
              };
            }
          }

          return (
            <AnswerButton
              key={choice.id}
              onClick={() => {
                props.holdAnswer(choice.id);
              }}
              style={props.endQuiz ? checkAnswerStyle() : styles}
            >
              {choice.choice}
            </AnswerButton>
          );
        })}
      </div>
    </div>
  );
}
