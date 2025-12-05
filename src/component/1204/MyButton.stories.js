import MyButton from "./MyButton";

// モック関数を作成するヘルパー
const createActionLogger =
  (name) =>
  (...args) => {
    console.log(`[${name}]`, ...args);
    // Actions パネルに表示するには、argTypes の action 設定に依存
  };

export default {
  title: "MyApp/MyButton",
  component: MyButton,
  parameters: {
    actions: {argTypesRegex: "^handle.*"}, // handle で始まる props を自動検出
  },
  argTypes: {
    primary: {
      control: "boolean",
      description: "primaryボタンかどうか",
    },
    backgroundColor: {
      control: "color",
      description: "背景色",
    },
    size: {
      control: {type: "select"},
      options: ["small", "medium", "large"],
      description: "サイズ",
    },
    label: {
      control: "text",
      description: "ラベル",
    },
  },
};

export const Index = {
  args: {
    primary: true,
    size: "medium",
    label: "ボタン",
    handleClick: (e) => {
      console.log("clicked at:", new Date(), "event:", e);
    },
  },
};

export const White = {
  args: {
    primary: false,
    size: "small",
    label: "ボタン",
    backgroundColor: "#fff",
  },
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: "Lightyellow",
  },
};
