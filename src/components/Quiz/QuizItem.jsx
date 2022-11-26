/* eslint-disable react/prop-types */
import React from "react";

// import AnswerButton from "../UI/AnswerButton";

import classes from "./QuizItem.module.css";

export default function QuizItem(props) {
  return (
    <div>
      {props.quizzes.map((quiz) => (
        <div
          key={Math.random().toString()}
          className={classes.quizlist__quizitem}
        >
          <h3 className={classes.quizitem__h3}>
            {quiz.question.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}
          </h3>
          {/* <AnswerButton>{quiz.answerSelection}</AnswerButton>
          <AnswerButton>{quiz.answerSelection}</AnswerButton>
          <AnswerButton>{quiz.answerSelection}</AnswerButton>
          <AnswerButton>{quiz.answerSelection}</AnswerButton> */}
          {/* In this 'answerSelection', I want to randomise an array of answers which also contains the correct answer, 
          therefore, this array will need to contain both the incorrect and correct answers, 
          therefore, I will need to create a new array that contains both of these incorrect and correct answers,
          thereby, I will need to somehow, take the value of the correct answer AND the value(in this case, the array of the incorrect answers) and JOIN them together to make a new AnswerSelection Array.
          Once this array has been made, I will then need a function that will randomise the index number of this array and return said randomized index number.
          Finally, use this randomised index number in the answer button. 
          */}
        </div>
      ))}
    </div>
  );
}

// {
//   /*
//
//
//         <AnswerButton>ANSWER</AnswerButton>
//         <AnswerButton>ANSWER</AnswerButton>
//
// }
