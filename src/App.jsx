import React from "react";
import Welcome from "./components/UI/Welcome";
import QuizList from "./components/Quiz/QuizList";

export default function App() {
  const [isShown, setIsShown] = React.useState(true);
  const [quizData, setQuizData] = React.useState({});

  fetch(
    "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  function welcomeModalHandler() {
    setIsShown((isShown) => !isShown);
  }

  return (
    <div>
      {isShown && <Welcome onWelcomeModalHandler={welcomeModalHandler} />}
      {!isShown && <QuizList />}
    </div>
  );
}
