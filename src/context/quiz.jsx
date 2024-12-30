import { act, createContext, useReducer } from "react";

import questions from "../data/questions_complete";

const Stages = ["Start", "Category", "Playing", "End"];

const inicialState = {
  gameStage: Stages[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false,
  optionToHide: null,
};

function QuizReducer(state, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: Stages[1],
      };

    case "START_GAME":
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: Stages[2],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
        gameStage: Stages[2],
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? Stages[3] : state.gameStage,
        answerSelected: false,
        help: false,
      };

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (option === answer) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    case "SHOW_TIP":
      return {
        ...state,
        help: "tip",
      };

    case "REMOVE_OPTION":
      const questionWithoutOption = state.questions[state.currentQuestion];

      const randomIndex = Math.floor(
        Math.random() * questionWithoutOption.options.length
      );

      let optionToHide;

      while (true) {
        optionToHide = questionWithoutOption.options[randomIndex];
        if (optionToHide !== questionWithoutOption.answer) {
          break;
        }

        randomIndex = Math.floor(
          Math.random() * questionWithoutOption.options.length
        );
      }

      return {
        ...state,
        optionToHide,
        help: true,
      };

    case "NEW_GAME":
      return inicialState;

    default:
      return state;
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(QuizReducer, inicialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
