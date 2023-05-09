/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 9em 2em;
  @media only screen and (min-width: 600px) {
    padding: 9em;
  }
`;

const WelcomeTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 0;
`;

const WelcomeSubtitle = styled.h3`
  font-size: 1.2rem;
  line-height: 2.5;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export default function Welcome(props: { onWelcomeModalHandler: () => void }) {
  return (
    <ModalCard>
      <WelcomeTitle>Quizzical</WelcomeTitle>
      <WelcomeSubtitle>Fun trivia quiz for everyone!</WelcomeSubtitle>
      <Footer>
        <Button type="button" onClick={props.onWelcomeModalHandler}>
          Start Quiz
        </Button>
      </Footer>
    </ModalCard>
  );
}
