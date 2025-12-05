import "./ButtonComponentStory.css";

export default function ButtonComponentStory({
  mode = "general",
  radius = false,
  shadow = false,
  textColor,
  fontSize,
  ...props
}) {
  const labelText = mode === "delete" ? "解除" : mode === "add" ? "追加" : "汎用";

  // 動的なスタイルオブジェクトを定義
  const styles = {
    color: textColor || "#333",
    fontSize: fontSize || "16px",
  };

  return (
    <button
      type="button"
      className={`btnStory ${mode} ${radius ? "radius" : ""} ${shadow ? "shadow" : ""}`}
      style={styles}
      {...props}
    >
      {labelText}
    </button>
  );
}
