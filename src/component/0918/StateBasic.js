// import {useState} from "react";

// export default function StateBasic({init}) {
//   const [count, setCount] = useState(init);

//   const handleClick = () => {
//     setCount(count + 1); // カウントを1増やす
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>カウント</button>
//       <p>{count}回クリックされました</p>
//     </div>
//   );
// }
import {useState} from "react";

export default function StateBasic({init}) {
  const [count, setCount] = useState(init);
  console.log(`current is ${count}.`);

  const handleClick = () => {
    setCount(count + 1); // カウントを1増やす
  };

  return (
    <div>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました</p>
    </div>
  );
}
