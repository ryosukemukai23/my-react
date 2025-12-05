import {useState} from "react";
import "./ChangeThemeBtn.css";

export default function ChangeThemeBtn({shape, border}) {
  const [theme, setTheme] = useState("");

  const changeTheme = (e) => {
    const val = e.target.value;
    setTheme(val);
  };

  return (
    <>
      <div className={`box ${theme} ${shape === "square" ? "square" : "circle"} ${border && "border"}`}></div>
      <button type="button" value="pink" onClick={changeTheme}>
        ピンク
      </button>
      <button type="button" value="skyblue" onClick={changeTheme}>
        スカイブルー
      </button>
      <button type="button" value="black" onClick={changeTheme}>
        ブラック
      </button>
    </>
  );
}
