import React from "react";

import QuizItem from "./QuizItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./QuizList.module.css";

export default function QuizList(props) {
  return (
    <Card className={classes.quizlist}>
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <Button>Check Answers</Button>
    </Card>
  );
}
