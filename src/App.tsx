import React from "react";
import Welcome from "./components/UI/Welcome";
import QuizList from "./components/Quiz/QuizList";
import styled from "styled-components";
import bgImage from "../src/assets/Background.svg";
// import QuizListReducer from "./components/Quiz/QuizListReducer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em;
  padding-top: 1em;
  padding-bottom: 1em;

  @media only screen and (min-width: 600px) {
    height: 100vh;
    padding: 5em;
  }
`;

const QuizContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgImage});
  border-radius: 15px;
`;

export default function App() {
  const [isShown, setIsShown] = React.useState(true);

  function welcomeModalHandler() {
    setIsShown((isShown) => !isShown);
  }

  return (
    <>
      <Container>
        <QuizContainer>
          {isShown && <Welcome onWelcomeModalHandler={welcomeModalHandler} />}
          {/* {!isShown && <QuizListReducer />} */}
          {!isShown && <QuizList />}
        </QuizContainer>
      </Container>
    </>
  );
}
