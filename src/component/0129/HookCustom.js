import useCounter from "./useCounter";

export default function HookCustom() {
  const [state, update, reset, down] = useCounter(0, 1);

  return (
    <>
      <p>{state}</p>
      <button onClick={update}>up</button>
      <button onClick={reset}>reset</button>
      <button onClick={down}>down</button>
    </>
  );
}
