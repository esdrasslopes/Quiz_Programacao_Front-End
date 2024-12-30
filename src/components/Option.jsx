import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOptions, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? " correct" : ""
      }
    ${quizState.answerSelected && option !== answer ? "wrong" : ""}
    ${hide ? "hide" : null}`}
      onClick={() => selectOptions(option)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
