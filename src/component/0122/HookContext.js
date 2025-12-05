import {createContext} from "react";
import {HookContextChild} from "./HookContextChild"; // ✅ 子をちゃんとインポート

export const MyAppContext = createContext();

const config = {
  title: "My App",
  lang: "ja-JP",
};

export default function HookContext() {
  return (
    <MyAppContext.Provider value={config}>
      <div id="c_main">
        <HookContextChild /> {/* ✅ 大文字で始まる */}
      </div>
    </MyAppContext.Provider>
  );
}
