import { useEffect, useState } from "react";

export default function ProgressBar({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
