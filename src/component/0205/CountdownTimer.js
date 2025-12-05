import React from "react";
import useCountdown from "./useCountdown";

function CountdownTimer() {
  const {seconds, start, reset, isRunning} = useCountdown(10);

  return (
    <div>
      <h1>カウントダウン: {seconds}秒</h1>
      <button onClick={start} disabled={isRunning}>
        スタート
      </button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}

export default CountdownTimer;
