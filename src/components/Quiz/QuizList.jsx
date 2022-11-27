import React from "react";
import { nanoid } from "nanoid";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./QuizList.module.css";

export default function QuizList(props) {
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const dataArray = data.results;
        const newDataArray = [];
        dataArray.map((item) => {
          return newDataArray.push({
            question: item.question
              .replaceAll("&quot;", '"')
              .replaceAll("&#039;", "'"),
            correct: item.correct_answer
              .replaceAll("&quot;", '"')
              .replaceAll("&#039;", "'"),
            choices: [
              {
                choice: item.correct_answer
                  .replaceAll("&quot;", '"')
                  .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: item.incorrect_answers[0]
                  .replaceAll("&quot;", '"')
                  .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: item.incorrect_answers[1]
                  .replaceAll("&quot;", '"')
                  .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: item.incorrect_answers[2]
                  .replaceAll("&quot;", '"')
                  .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
            ].sort(() => 0.5 - Math.random()),
            id: nanoid(),
          });
        });
        return setQuiz(newDataArray);
      });
  }, []);

  console.log(quiz);

  const quizItemComponents = quiz.map((item) => {
    return (
      <QuizItem key={item.id} question={item.question} choices={item.choices} />
    );
  });

  return (
    <Card className={classes.quizlist}>
      {quizItemComponents}
      <Button>Check Answers</Button>
    </Card>
  );
}

// onHoldAnswer={() => holdAnswer(quiz.id)}
