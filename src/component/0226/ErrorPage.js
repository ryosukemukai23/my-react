import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{padding: "2rem"}}>
      <h1>エラーが発生しました</h1>
      <p>Status: {error.status || "不明"}</p>
      <p>Message: {error.message || "何らかのエラーです"}</p>
    </div>
  );
}
