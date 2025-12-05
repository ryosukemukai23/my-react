import {useContext} from "react";
import LanguageContext from "./LanguageContext";

import {memo} from "react";

export default function GreetingMessage() {
  const {translate} = useContext(LanguageContext);

  return <h2>{translate("greeting")}</h2>;
}

// ボタンコンポーネント
export const MyButton = memo(({id, handleClick, children}) => {
  console.log(`MyButton is called ${id}`);
  return <button onClick={handleClick}>{children}</button>;
});

// カウンターコンポーネント
export const MyCounter = memo(({id, count}) => {
  console.log(`MyCounter is called ${id}`);
  return <p>{count}</p>;
});
