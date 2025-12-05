import {useState} from "react";
import StateCounter from "./StateCounter";

export default function StateParent() {
  const [count, setCount] = useState(0);

  const update = (num) => setCount((c) => c + num);

  return (
    <>
      <p>現在のカウントは {count}</p>
      <StateCounter step={1} OnUpdate={update} />
      <StateCounter step={5} OnUpdate={update} />
      <StateCounter step={-1} OnUpdate={update} />
    </>
  );
}
