import {useEffect, useState} from "react";

export default function StateEffect({init}) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setHoge(`hoge: ${count}`);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={() => setHoge(new Date().toString())}>日時セット</button>
      <button onClick={handleClick}>カウント</button>
      <p>カウント: {count}</p>
      <p>{hoge}</p>
    </>
  );
}
