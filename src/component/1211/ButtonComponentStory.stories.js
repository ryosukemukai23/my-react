import ButtonComponentStory from "./ButtonComponentStory";

export default {
  title: "ButtonComponentStory",
  component: ButtonComponentStory,
  argTypes: {
    mode: {
      type: "string",
      description: "ボタンタイプ",
      control: {type: "select"},
      options: ["general", "add", "delete"],
    },
    radius: {
      type: "boolean",
      description: "角丸設定",
    },
    shadow: {
      type: "boolean",
      description: "影設定",
    },
    textColor: {
      type: "string",
      description: "文字色",
    },
    fontSize: {
      name: "fontSize",
      description: "フォントサイズ(px)",
      control: {type: "range", min: 10, max: 50, step: 1},
    },
  },
};

export const Index = {
  args: {
    radius: true,
    textColor: "#333",
  },
};
