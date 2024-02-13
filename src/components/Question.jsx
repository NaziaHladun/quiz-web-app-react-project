import ProgressBar from "./ProgressBar";
import Answers from "./Answers";
import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Question({ index, onSelectAnswer, onSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelect = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <ProgressBar timeout={10000} onTimeout={onSkip} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answerState={answerState}
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelect}
      />
    </div>
  );
}
