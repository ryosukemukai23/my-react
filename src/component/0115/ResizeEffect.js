import {useEffect, useState} from "react";

export default function ResizeEffect() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [resizeEnabled, setResizeEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (resizeEnabled) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    // 初期化時に一度実行
    handleResize();

    // イベント登録
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeEnabled]); // resizeEnabledが変わるたびに再設定

  const toggleResize = () => {
    setResizeEnabled((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Window Size Tracker</h1>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
      <button onClick={toggleResize}>{resizeEnabled ? "Stop Resizing" : "Start Resizing"}</button>
    </div>
  );
}
