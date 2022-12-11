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
        const newDataArray = dataArray.map((item) => {
          return {
            question: decodeHtml(item.question),

            correct: decodeHtml(item.correct_answer),

            choices: [
              {
                choice: decodeHtml(item.correct_answer),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: decodeHtml(item.incorrect_answers[0]),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: decodeHtml(item.incorrect_answers[1]),
                isSelected: false,
                id: nanoid(),
              },
              {
                choice: decodeHtml(item.incorrect_answers[2]),
                isSelected: false,
                id: nanoid(),
              },
            ].sort(() => 0.5 - Math.random()),
            id: nanoid(),
          };
        });
        return setQuiz(newDataArray);
      });
  }, []);

  // function holdAnswer(id) {
  //   setQuiz((oldQuiz) =>
  //     oldQuiz.map((quiz) => {
  //       return quiz.choices.map((choice) => {
  //         return choice.id === id
  //           ? { ...choice, isSelected: !choice.isSelected }
  //           : choice;
  //       });
  //     })
  //   );
  // }

  // function checkAnswer(quizId) {
  //   setQuiz((oldQuiz) =>
  //     oldQuiz.map((quiz) => {
  //       if (quiz.id !== quizId) return quiz;
  //       return {
  //         ...quiz,
  //         choices: quiz.choices.map((choice) => {
  //           if (choice.isSelected && choice.choice === quiz.correct) {
  //             return { ...choice, backgroundColor: "green" };
  //           } else if (choice.isSelected && choice.choice !== quiz.correct) {
  //             return { ...choice, backgroundColor: "red" };
  //           } else if (!choice.isSelected && choice.choice === quiz.correct) {
  //             return { ...choice, backgroundColor: "grey" };
  //           } else {
  //             return choice;
  //           }
  //         }),
  //       };
  //     })
  //   );
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

//  once you press the "check answers" button,
//  if the user selected answer is equal to the correct answer,
//  then change the background color of the user selected button to green and all other incorrect answer buttons to grey,
//  else if the user selected answer is NOT equal to the correct answer,
//  then change the background color of the user selected answer to red and
//  change the answer button which contains the right answer to green and
//  all other incorrect answers to grey.
