import React, {useState} from "react";

export default function InputName() {
  const [message, setName] = useState("名前をどうぞ");
  let inputText = "";
  const doChange = (e) => {
    inputText = e.target.value + "さんですね";
  };
  const doAction = () => {
    setName(inputText);
  };
  return (
    <div>
      <p>{message}</p>
      <input type="text" onChange={doChange} />
      <button onClick={doAction}>送信</button>
    </div>
  );
}

