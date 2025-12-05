import {useState} from "react";
import "./stopCancelEvent.css";

export default function StopCancelEvent() {
  const [mode, setMode] = useState(false);

  const handleParent = (e) => {
    if (e.shiftKey) {
      alert(`この要素のクラス名は${e.target.className}です。`);
    } else {
      alert("Shiftkeyを押しながらクリックしてください。");
    }
  };

  const handleButton = (e) => {
    e.stopPropagation();
    alert("リンクモード: " + e.target.dataset.mode);
    if (e.target.dataset.mode === "active") {
      setMode(true);
    } else {
      setMode(false);
    }
  };

  const handleLink = (e) => {
    e.stopPropagation();
    if (!mode) {
      e.preventDefault();
      alert("リンクを有効にしてください。");
    }
  };

  return (
    <>
      <div className="parent" onClick={handleParent}>
        親要素（シフトを押しながらクリックでクラス名表示）
        <div>
          <button type="button" data-mode="active" onClick={handleButton}>
            リンクを有効
          </button>
          <button type="button" data-mode="passive" onClick={handleButton}>
            リンクを無効
          </button>
        </div>
        <a href="https://google.com" onClick={handleLink}>
          リンク
        </a>
      </div>
    </>
  );
}
