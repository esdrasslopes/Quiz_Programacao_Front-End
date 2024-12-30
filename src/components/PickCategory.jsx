import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import CategoryImg from "../img/category.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestion = (category) => {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha alguma categoria</h2>
      <p>As perguntas serão diferentes para cada linguagem abaixo</p>
      {quizState.questions.map((question) => (
        <button
          key={question.category}
          onClick={() => chooseCategoryAndReorderQuestion(question.category)}
        >
          {question.category}
        </button>
      ))}
      <img src={CategoryImg} alt="Seleção de linguagem" />
    </div>
  );
};

export default PickCategory;
