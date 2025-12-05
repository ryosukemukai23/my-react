import {useEffect, useState} from "react";
import "./HookTimer.css";

export default function HookTimer({init}) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((prevCount) => prevCount - 1); // ← ここを減らす
    }, 1000);

    return () => clearInterval(t);
  }, []);

  return <div className={count < 0 ? "warn" : ""}>現在のカウント {count}</div>;
}
