import {useRef, useEffect} from "react";
import "./EventPassive.css";

export default function EventPassive() {
  const divRef = useRef(null);

  // wheelイベントの処理
  const handleWheel = (e) => {
    e.preventDefault(); // デフォルトのスクロール動作を止める
    console.log("Wheel event detected!");
  };

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    // passive: false にすることで preventDefault が有効になる
    div.addEventListener("wheel", handleWheel, {passive: false});

    // クリーンアップ（コンポーネントがアンマウントされたら解除）
    return () => {
      div.removeEventListener("wheel", handleWheel);
    };
  }, []); // 初回だけ実行

  return (
    <div className="box" ref={divRef}>
      例えば wheel イベントをハンドラーで処理する状況を考えてみましょう。 通常、wheel
      イベントのデフォルト動作はページや要素のスクロールです。
    </div>
  );
}
