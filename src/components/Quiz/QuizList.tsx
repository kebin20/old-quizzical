import React, { useEffect, useState, useCallback } from "react";
const nanoid: () => string = require("nanoid");
import styled from "styled-components";
import bgImage from "../../assets/Background.svg";
import { FetchedQuiz, ModifiedQuiz } from "src/interfaces";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";

const CardDiv = styled.div`
  display: flex;
  position: absolute;
  top: 2%;
  left: 50%;
  padding: 2.5em;
  transform: translate(-50%, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgImage});
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const QuizListCard = styled(CardDiv)`
  align-items: stretch;
  max-width: 900px;
  width: 90vw;
  padding-left: 6em;
  padding-right: 6em;
`;

const ScoreDisplay = styled.p`
  padding-right: 2em;
  font-size: 2rem;
  font-weight: bold;
`;

const ResultScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LoadingText = styled.h1`
  text-align: center;
  padding: 2em;
`;

function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function QuizList() {
  const [quiz, setQuiz] = useState<FetchedQuiz[]>([]);
  const [endQuiz, setEndQuiz] = useState(false);
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addCorrectCountHandler = useCallback(setNoOfCorrectAnswers, []);

  const fetchQuizData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
      );
      if (!response.ok) {
        throw new Error("An error has occurred!");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  function obtainQuiz() {
    fetchQuizData().then((data) => {
      const dataArray = data.results;
      const newDataArray = dataArray.map((item: ModifiedQuiz) => {
        return {
          question: decodeHtml(item.question),
          choices: [
            {
              choice: decodeHtml(item.correct_answer),
              isSelected: false,
              correct: decodeHtml(item.correct_answer),
              id: nanoid(),
            },
            {
              choice: decodeHtml(item.incorrect_answers[0]),
              isSelected: false,
              correct: decodeHtml(item.correct_answer),
              id: nanoid(),
            },
            {
              choice: decodeHtml(item.incorrect_answers[1]),
              isSelected: false,
              correct: decodeHtml(item.correct_answer),
              id: nanoid(),
            },
            {
              choice: decodeHtml(item.incorrect_answers[2]),
              isSelected: false,
              correct: decodeHtml(item.correct_answer),
              id: nanoid(),
            },
          ].sort(() => 0.5 - Math.random()),
          id: nanoid(),
        };
      });
      setQuiz(newDataArray);
    });
    setIsLoading(false);
  }

  useEffect(() => {
    obtainQuiz();
  }, []);

  function finishQuiz() {
    let correctAnswers = 0;
    quiz.forEach((item) => {
      for (let i = 0; i < item.choices.length; ++i) {
        const choice = item.choices[i];
        if (choice.isSelected && choice.choice === choice.correct) {
          correctAnswers = correctAnswers + 1;
          break;
        }
      }
    });
    setNoOfCorrectAnswers(correctAnswers);
    setEndQuiz((prevEndQuiz) => !prevEndQuiz);
  }

  function startNewQuiz() {
    setQuiz([]);
    setEndQuiz(false);
    obtainQuiz();
  }

  function holdAnswer(quizId: string, choiceId: string) {
    setQuiz((oldQuiz) =>
      oldQuiz.map((quiz) => {
        if (quiz.id !== quizId) return quiz;
        return {
          ...quiz,
          choices: quiz.choices.map((choice) =>
            choice.id === choiceId
              ? // If the choice selected is the current choice, toggle its selected state
                { ...choice, isSelected: !choice.isSelected }
              : // Otherwise, deselect the choice
                { ...choice, isSelected: false }
          ),
        };
      })
    );
  }

  let quizItemComponents = <LoadingText>Setting Quizzes...</LoadingText>;

  if (quiz.length > 0) {
    quizItemComponents = (
      <>
        {quiz.map((item) => {
          return (
            <QuizItem
              key={item.id}
              question={item.question}
              choices={item.choices}
              holdAnswer={(id: string) => holdAnswer(item.id, id)}
              endQuiz={endQuiz}
              correct={item.correct}
              onSaveCorrectCountData={addCorrectCountHandler}
              correct_answer={""}
              incorrect_answers={[]}
              id={""}
            />
          );
        })}
      </>
    );
  }

  if (error) {
    quizItemComponents = <p>{error}</p>;
  }

  if (isLoading) {
    quizItemComponents = <p>Please wait...</p>;
  }

  return (
    <QuizListCard role="list">
      {quizItemComponents}
      {!endQuiz && <Button onClick={finishQuiz}>Check Answers</Button>}
      {endQuiz && (
        <ResultScreen>
          <ScoreDisplay>You scored {noOfCorrectAnswers}/5 answers</ScoreDisplay>
          <Button onClick={startNewQuiz}>Play Again</Button>
        </ResultScreen>
      )}
    </QuizListCard>
  );
}
