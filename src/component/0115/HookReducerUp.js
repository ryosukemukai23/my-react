import {useReducer} from "react";

export default function HookReducerUp({init = 0}) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "update":
          return {count: state.count + action.step};
        case "reset":
          return {count: action.init};
        default:
          return state;
      }
    },
    {count: init}
  );

  const handleUp = () => {
    dispatch({type: "update", step: 1});
  };

  const handleDown = () => {
    dispatch({type: "update", step: -1});
  };

  const handleReset = () => {
    dispatch({type: "reset", init});
  };

  return (
    <>
      <button onClick={handleUp}>上へ</button>
      <button onClick={handleDown}>下へ</button>
      <button onClick={handleReset}>リセット</button>
      <p>{state.count}回クリックされました</p>
    </>
  );
}
