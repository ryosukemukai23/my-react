import {useEffect, useState} from "react";

function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    if (seconds === 0) setSeconds(initialSeconds);
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(initialSeconds);
  };
  return {seconds, start, reset, isRunning};
}

export default useCountdown;
