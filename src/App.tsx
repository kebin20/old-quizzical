import React from "react";
import Welcome from "./components/UI/Welcome";
import QuizList from "./components/Quiz/QuizList";

export default function App() {
  const [isShown, setIsShown] = React.useState(true);

  function welcomeModalHandler() {
    setIsShown((isShown) => !isShown);
  }

  return (
    <React.Fragment>
      {isShown && <Welcome onWelcomeModalHandler={welcomeModalHandler} />}
      {!isShown && <QuizList />}
    </React.Fragment>
  );
}
