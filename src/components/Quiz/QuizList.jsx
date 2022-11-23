import React from "react";
import QuizItem from "./QuizItem";
import Button from "../UI/Button";

import classes from "./QuizList.module.css";

export default function QuizList(props) {
  return (
    <div className={classes.quizlist}>
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <Button>Check Answers</Button>
    </div>
  );
}
