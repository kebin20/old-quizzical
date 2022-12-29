import React from "react";
import { nanoid } from "nanoid";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./QuizList.module.css";

export default function QuizList(props) {
  const [quiz, setQuiz] = React.useState([]);
  const [endQuiz, setEndQuiz] = React.useState(false);
  // const [newGame, setNewGame] = React.useState(false);
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = React.useState(0);

  function saveCorrectCountData(count) {
    setNoOfCorrectAnswers(count);
  }

  React.useEffect(() => {
    /* This function turns HTML element entities into normal words */
    function decodeHtml(html) {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }

    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
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
        return setQuiz(newDataArray);
      });
  }, []);

  // console.log(quiz);

  function finishQuiz() {
    setEndQuiz((prevEndQuiz) => !prevEndQuiz);
  }

  // function startNewGame() {
  //   setNewGame(true);
  // }

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

  const quizItemComponents = quiz.map((item) => {
    return (
      <QuizItem
        key={item.id}
        question={item.question}
        choices={item.choices}
        holdAnswer={(id) => holdAnswer(item.id, id)}
        endQuiz={endQuiz}
        correct={quiz.correct}
        onSaveCorrectCountData={saveCorrectCountData}
      />
    );
  });

  return (
    <Card className={classes.quizlist}>
      {quizItemComponents}
      {!endQuiz && <Button onClick={finishQuiz}>Check Answers</Button>}
      {endQuiz && (
        <div className={classes.result}>
          <p>You scored {noOfCorrectAnswers}/5 answers</p>
          <Button>Play Again</Button>
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
