/* eslint-disable react/prop-types */
import React from "react";

import classes from "./Welcome.module.css";

import Button from "./Button";

export default function Welcome(props) {
  return (
    <div className={classes.modal}>
      <h1 className={classes.welcome__h1}>Quizzical</h1>
      <h3 className={classes.welcome__h3}>Fun trivia quiz for everyone!</h3>
      <footer className="footer">
        <Button type="button" onClick={props.onWelcomeModalHandler}>
          Start Quiz
        </Button>
      </footer>
    </div>
  );
}
