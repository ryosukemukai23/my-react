import {useRef, useState} from "react";

export default function HookRefFixed() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null); // ← ここで保持

  const handleStart = () => {
    if (timerId.current === null) {
      timerId.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
  };

  const handleEnd = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}
