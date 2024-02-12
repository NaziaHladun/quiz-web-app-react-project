import { useCallback, useState } from "react";

import ProgressBar from "./ProgressBar";
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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar
          key={activeQuestionIndex}
          timeout={5000}
          onTimeout={handleSkip}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelect(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
