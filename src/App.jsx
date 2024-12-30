import Welcome from "./components/Welcome";

import { QuizContext } from "./context/quiz";

import { useContext } from "react";

import Question from "./components/Question";

import PickCategory from "./components/PickCategory";

import GameOver from "./components/GameOver"

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="app">
      <h1>Quiz de Programação Front-End</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
