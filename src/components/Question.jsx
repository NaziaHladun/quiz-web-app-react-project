import ProgressBar from "./ProgressBar";
import Answers from "./Answers";

export default function Question({
  questionText,
  questionAnswer,
  onSelect,
  selectedAnswer,
  answerState,
  onSkip,
}) {
  return (
    <div id="question">
      <ProgressBar timeout={10000} onTimeout={onSkip} />
      <h2>{questionText}</h2>
      <Answers
        answerState={answerState}
        answers={questionAnswer}
        selectedAnswer={selectedAnswer}
        onSelect={onSelect}
      />
    </div>
  );
}
