import React from "react";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./QuizList.module.css";

export default function QuizList(props) {
  const [quiz, setQuiz] = React.useState({
    questions: "",
    correctAnswer: "",
    incorrectAnswer: "",
  });

  const [allQuiz, setAllQuiz] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setAllQuiz(data.results));

  }, [quiz]);

  function getQuizData() {
    const randomNumber = Math.floor(Math.random() * allQuiz.length);
    const question1 = allQuiz[0].question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    const question2 = allQuiz[1].question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    const question3 = allQuiz[2].question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    const question4 = allQuiz[3].question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    const question5 = allQuiz[4].question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    const correct = allQuiz[randomNumber].correct_answer;
    const incorrect = allQuiz[randomNumber].incorrect_answers;
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      questions: {
        first: question1,
        second: question2,
        third: question3,
        fourth: question4,
        fifth: question5,
      },
      correctAnswer: correct,
      incorrectAnswer: incorrect,
      id: Math.ceil(Math.random() * 6),
    }));
  }

  return (
    <Card className={classes.quizlist}>
      <QuizItem
        question={quiz.questions.first}
        correctAnswer={quiz.correctAnswer}
        incorrectAnswers={quiz.incorrectAnswer}
      />
      <QuizItem
        question={quiz.questions.second}
        correctAnswer={quiz.correctAnswer}
        incorrectAnswers={quiz.incorrectAnswer}
      />
      <QuizItem
        question={quiz.questions.third}
        correctAnswer={quiz.correctAnswer}
        incorrectAnswers={quiz.incorrectAnswer}
      />
      <QuizItem
        question={quiz.questions.fourth}
        correctAnswer={quiz.correctAnswer}
        incorrectAnswers={quiz.incorrectAnswer}
      />

      <QuizItem
        question={quiz.questions.fifth}
        correctAnswer={quiz.correctAnswer}
        incorrectAnswers={quiz.incorrectAnswer}
      />
      <Button>Check Answers</Button>
    </Card>
  );
}
