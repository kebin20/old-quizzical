/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import classes from "./Welcome.module.css";

import Card from "./Card";
import Button from "./Button";

const WelcomeTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 0;
`;

const WelcomeSubtitle = styled.h3`
  font-size: 1.2rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export default function Welcome(props) {
  return (
    <Card className={classes.modal}>
      <WelcomeTitle>Quizzical</WelcomeTitle>
      <WelcomeSubtitle>Fun trivia quiz for everyone!</WelcomeSubtitle>
      <Footer>
        <Button type="button" onClick={props.onWelcomeModalHandler}>
          Start Quiz
        </Button>
      </Footer>
    </Card>
  );
}
