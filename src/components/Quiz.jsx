import { useCallback, useState } from "react";

import Question from "./Question";
import QUESTIONS from "../questions.js";
import trophyIcon from "../assets/quiz-complete.png";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelect = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
        questionText={QUESTIONS[activeQuestionIndex].text}
        questionAnswer={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkip={handleSkip}
        onSelect={handleSelect}
      />
    </div>
  );
}
