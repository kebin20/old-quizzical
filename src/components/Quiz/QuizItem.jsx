/* eslint-disable react/prop-types */
import React from "react";

import AnswerButton from "../UI/AnswerButton";

import classes from "./QuizItem.module.css";

export default function QuizItem(props) {
const [correctCount, setCorrectCount] = React.useState(0)

function addToCorrectCount() {
    setCorrectCount(correctCount + 1)
  }

props.onSaveCorrectCountData(correctCount)


console.log(correctCount);

  return (
    <div>
      <div key={props.id} className={classes.quizlist__quizitem}>
        <h3 className={classes.quizitem__h3}>{props.question}</h3>
        {props.choices.map((choice) => {
          const styles = {
            backgroundColor: choice.isSelected ? "#D6DBF5" : "white",
          }; 

          // React.useEffect(() => {
          //   if (choice.isSelected && choice.choice === choice.correct) {
          //     addToCorrectCount();
          //   }
          // }, [choice.isSelected, choice.correct]);

          function checkAnswerStyle() {
            /* this is to indicate that the selected answer is right, makes button go green*/
            if (choice.isSelected && choice.choice === choice.correct) {
              addToCorrectCount()
              return {
                backgroundColor: "#94D7A2",
                color: "#4D5B9E",
                border: "none",
              };
              /* this is to indicate that the selected answer is wrong, makes button go red*/
            } else if (choice.isSelected && choice.choice !== choice.correct) {
              return {
                backgroundColor: "#F8BCBC",
                color: "#4D5B9E",
                border: "none",
              };
              /* this is to highlight the right answer if a selected answer is wrong*/
            } else if (choice.choice === choice.correct) {
              return {
                backgroundColor: "#94D7A2",
                color: "#4D5B9E",
                border: "none",
              };
              /* this is to grey out the incorrect answers*/
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
// create a counter, and for every correct answer (green button), increase the counter by 1. 