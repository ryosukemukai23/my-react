import {useState} from "react";

export default function EventError({src, alt}) {
  const [path, setPath] = useState(src);

  const handleError = () => {
    setPath("https://placehold.jp/150x150.png"); // エラー時の代替画像
  };

  return (
    <img
      src={path}
      alt={alt}
      onError={handleError}
      style={{
        border: "2px solid #ccc",
        borderRadius: "8px",
        display: "block",
        margin: "40px auto",
      }}
    />
  );
}
