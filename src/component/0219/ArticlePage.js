import {useParams} from "react-router-dom";

export default function ArticlePage() {
  const {id = "100"} = useParams();

  // idが数字でなければエラー
  if (!/[0-9]/.test(id)) {
    throw new RangeError("id is invalid!!");
  }

  return (
    <>
      <h2>Article Page</h2>
      <p>id: {id}</p>
    </>
  );
}
