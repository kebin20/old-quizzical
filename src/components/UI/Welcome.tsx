/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import bgImage from "../../assets/Background.svg";

const CardDiv = styled.div`
  display: flex;
  position: absolute;
  top: 2%;
  left: 50%;
  padding: 2.5em;
  transform: translate(-50%, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgImage});
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const ModalCard = styled(CardDiv)`
  max-width: 700px;
  width: 90vw;
  height: 60vh;
  padding: 5em;
  z-index: 100;
  overflow: hidden;
`

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

export default function Welcome(props: { onWelcomeModalHandler: () => void; }) {
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
