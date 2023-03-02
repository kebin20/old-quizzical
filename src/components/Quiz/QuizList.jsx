import React, { useEffect, useState, useCallback } from "react";
import { nanoid } from "nanoid";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./QuizList.module.css";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function QuizList(props) {
  const [quiz, setQuiz] = useState([]);
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
      return data;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  function obtainQuiz() {
    fetchQuizData().then((data) => {
      const dataArray = data.results;
      const newDataArray = dataArray.map((item) => {
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

  function holdAnswer(quizId, choiceId) {
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

  let quizItemComponents = <p>Setting Quizzes...</p>;

  if (quiz.length > 0) {
    quizItemComponents = quiz.map((item) => {
      return (
        <QuizItem
          key={item.id}
          question={item.question}
          choices={item.choices}
          holdAnswer={(id) => holdAnswer(item.id, id)}
          endQuiz={endQuiz}
          correct={quiz.correct}
          onSaveCorrectCountData={addCorrectCountHandler}
        />
      );
    });
  }

  if (error) {
    quizItemComponents = <p>{error}</p>;
  }

  if (isLoading) {
    quizItemComponents = <p>Please wait...</p>;
  }

  return (
    <Card className={classes.quizlist}>
      {quizItemComponents}
      {!endQuiz && <Button onClick={finishQuiz}>Check Answers</Button>}
      {endQuiz && (
        <div className={classes.result}>
          <p>You scored {noOfCorrectAnswers}/5 answers</p>
          <Button onClick={startNewQuiz}>Play Again</Button>
        </div>
      )}
    </Card>
  );
}

//  once you press the "check answers" button,
//  if the user selected answer is equal to the correct answer,
//  then change the background color of the user selected button to green and all other incorrect answer buttons to grey,
//  else if the user selected answer is NOT equal to the correct answer,
//  then change the background color of the user selected answer to red and
//  change the answer button which contains the right answer to green and
//  all other incorrect answers to grey.
