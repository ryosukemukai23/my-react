// import {useReducer} from "react";

// export default function useCounter(init = 0, step = 1) {
//   const [state, dispatch] = useReducer(
//     (state, action) => {
//       switch (action.type) {
//         case "update":
//           return {count: state.count + action.step};
//         case "reset":
//           return {count: action.init};
//         default:
//           return state;
//       }
//     },
//     {count: init}
//   );

//   const update = () => dispatch({type: "update", step});
//   const down = () => dispatch({type: "update", step: -step});
//   const reset = () => dispatch({type: "reset", init});

//   return [state.count, update, reset, down];
// }
import {useDebugValue, useReducer} from "react";

export default function useCounter(init = 0, step = 1) {
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

  useDebugValue(state.count >= 10 ? "大きい" : "小さい");
  const update = () => dispatch({type: "update", step});
  const down = () => dispatch({type: "update", step: -step});
  const reset = () => dispatch({type: "reset", init});

  return [state.count, update, reset, down];
}
