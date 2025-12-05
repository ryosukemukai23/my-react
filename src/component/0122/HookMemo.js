import {useState} from "react";
import {MyButton, MyCounter} from "./HookMemoChild";

const sleep = (delay) => {
  const start = Date.now();
  while (Date.now() - start < delay) {}
};

export default function HookMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => setCount1((c) => c + 1);
  const decrement2 = () => setCount2((c) => c - 1);

  const heavyProcess = () => {
    sleep(1000);
    return count1 + 100;
  };

  return (
    <>
      <MyButton id="btn1" handleClick={increment1}>
        カウントアップ
      </MyButton>

      <MyButton id="btn2" handleClick={decrement2}>
        カウントダウン
      </MyButton>

      <MyCounter id="c1" count={count1} />
      <MyCounter id="c2" count={count2} />
    </>
  );
}
