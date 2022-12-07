import React from "react";
import { nanoid } from "nanoid";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./QuizList.module.css";

export default function QuizList(props) {
  const [quiz, setQuiz] = React.useState([]);

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
        const newDataArray = [];
        dataArray.map((item) => {
          return newDataArray.push({
            question: decodeHtml(item.question),
            // .replaceAll("&quot;", '"')
            // .replaceAll("&#039;", "'"),
            correct: decodeHtml(item.correct_answer),
            // .replaceAll("&quot;", '"')
            // .replaceAll("&#039;", "'"),
            choices: [
              {
                choice: decodeHtml(item.correct_answer),
                // .replaceAll("&quot;", '"')
                // .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: decodeHtml(item.incorrect_answers[0]),
                // .replaceAll("&quot;", '"')
                // .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: decodeHtml(item.incorrect_answers[1]),
                // .replaceAll("&quot;", '"')
                // .replaceAll("&#039;", "'"),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: decodeHtml(item.incorrect_answers[2]),
                // .replaceAll("&quot;", '"')
                // .replaceAll("&#039;", "'"),
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

  function holdAnswer(id) {
    setQuiz((oldQuiz) =>
      oldQuiz.map((quiz) => {
        return quiz.choices.map((choice) => {
          return choice.id === id
            ? { ...choice, isSelected: !choice.isSelected }
            : choice;
        });
      })
    );
  }

  const quizItemComponents = quiz.map((item) => {
    return (
      <QuizItem
        key={item.id}
        question={item.question}
        choices={item.choices}
        holdAnswer={() => holdAnswer(item.choices.id)}
      />
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
