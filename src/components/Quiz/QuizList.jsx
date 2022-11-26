import React from "react";

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
      .then((data) => setQuiz(data.results));
  }, []);

  console.log(quiz);

  return (
    <Card className={classes.quizlist}>
      <QuizItem quizzes={quiz} />
      <Button>Check Answers</Button>
    </Card>
  );
}
