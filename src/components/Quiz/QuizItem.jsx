/* eslint-disable react/prop-types */
import React from "react";

import AnswerButton from "../UI/AnswerButton";

import classes from "./QuizItem.module.css";

export default function QuizItem(props) {
  const isSelected = props.choices.map((choice) => {
    return choice.isSelected;
  });

  const styles = {
    backgroundColor: isSelected ? "#D6DBF5" : "white",
  };

  return (
    <div>
      <div key={props.id} className={classes.quizlist__quizitem}>
        <h3 className={classes.quizitem__h3}>{props.question}</h3>
        {props.choices.map((choice) => {
          return (
            <AnswerButton
              key={choice.id}
              onClick={props.holdAnswer}
              style={styles}
            >
              {choice.choice}
            </AnswerButton>
          );
        })}
      </div>
    </div>
  );
}

// {props.quizzes.map((quiz) => (
//   <div key={quiz.id} className={classes.quizlist__quizitem}>
//     <h3 className={classes.quizitem__h3}>{quiz.question}</h3>
//     {quiz.choices.map((choice, index) => {
//       return (
//         <AnswerButton
//           // styles={styles}
//           // onClick={choice.onHoldAnswer}
//           key={index}
//         >
//           {choice.answer}
//         </AnswerButton>
//       );
//     })}
//   </div>
// ))}
