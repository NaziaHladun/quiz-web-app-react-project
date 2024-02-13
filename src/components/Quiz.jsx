import { useCallback, useState } from "react";

import Question from "./Question";
import QUESTIONS from "../questions.js";
import trophyIcon from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelect = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkip = useCallback(() => handleSelect(null), [handleSelect]);

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={trophyIcon} alt="Trophy image" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkip={handleSkip}
        onSelectAnswer={handleSelect}
      />
    </div>
  );
}
