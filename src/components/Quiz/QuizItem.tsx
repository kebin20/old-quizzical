/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import AnswerButton from "../UI/AnswerButton";

const StyledQuizItem = styled.div`
  padding: 1em;
  border-bottom: 1px solid #8d99ae;
`;

const QuizItemTitle = styled.h3`
  font-size: 1.4rem;
`;

export default function QuizItem(props) {
  return (
    <>
      <StyledQuizItem key={props.id}>
        <QuizItemTitle>{props.question}</QuizItemTitle>
        {props.choices.map((choice) => {
          const styles = {
            backgroundColor: choice.isSelected ? "#D6DBF5" : "white",
          };

          function checkAnswerStyle() {
            /* this is to indicate that the selected answer is right, makes button go green */
            if (choice.isSelected && choice.choice === choice.correct) {
              return {
                backgroundColor: "#94D7A2",
                color: "#4D5B9E",
                border: "none",
              };
              /* this is to indicate that the selected answer is wrong, makes button go red */
            } else if (choice.isSelected && choice.choice !== choice.correct) {
              return {
                backgroundColor: "#F8BCBC",
                color: "#4D5B9E",
                border: "none",
              };
              /* this is to highlight the right answer if a selected answer is wrong */
            } else if (choice.choice === choice.correct) {
              return {
                backgroundColor: "#94D7A2",
                color: "#4D5B9E",
                border: "none",
              };
              /* this is to grey out the incorrect answers */
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
              } }
              style={props.endQuiz ? checkAnswerStyle() : styles}
              disabled={props.endQuiz ? true : false}            >
              {choice.choice}
            </AnswerButton>
          );
        })}
      </StyledQuizItem>
    </>
  );
}
// create a counter, and for every correct answer (green button), increase the counter by 1.
