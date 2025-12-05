import {useState} from "react";

export default function HookCallbackRef() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  // コールバックrefを定義
  const callbackRef = (elm) => {
    // elmがマウントされたタイミングで自動的にfocusされる
    if (elm) {
      elm.focus();
    }
  };

  return (
    <>
      <div>
        <label htmlFor="name">名前:</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input type="email" id="email" />
        <button onClick={handleClick}>拡張表示</button>
      </div>

      {show && (
        <div>
          <label htmlFor="address">住所:</label>
          <input type="text" id="address" ref={callbackRef} />
        </div>
      )}
    </>
  );
}
