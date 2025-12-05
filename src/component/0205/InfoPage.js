import {useNavigate} from "react-router-dom";

export default function InfoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>情報ページ</h1>

      {/* ArticlePage に戻る */}
      <button onClick={() => navigate("..", {relative: "path"})}>記事ページへ</button>
      <br />

      {/* TopPage に戻る */}
      <button onClick={() => navigate("../..", {relative: "path"})}>トップページへ</button>
    </div>
  );
}
