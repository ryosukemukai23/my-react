// ArticlePage.js
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function ArticlePage() {
  const {id} = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // ✅ 修正：正しいURL（余計なスペースと引用符を削除）
    fetch(
      "https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=12&apiKey=726002db79b047b29cd70e8fc157a479"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("ネットワークエラー");
        }
        return response.json();
      })
      .then((data) => {
        // ✅ 修正：articles配列からidに対応する記事を取得
        if (data.articles && data.articles.length > 0) {
          const articleIndex = parseInt(id) - 1; // id=1 → index=0
          if (articleIndex >= 0 && articleIndex < data.articles.length) {
            setArticle(data.articles[articleIndex]);
          } else {
            setError("記事が見つかりません");
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <div>
      <h1>記事ページ</h1>
      {article ? (
        <>
          <p>記事ID: {id}</p>
          <h2>{article.title}</h2>
          <p>{article.description || "説明がありません"}</p>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={{maxWidth: "100%"}} />}
          <p>著者: {article.author || "不明"}</p>
          <p>公開日: {new Date(article.publishedAt).toLocaleString("ja-JP")}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            元記事を読む
          </a>
        </>
      ) : (
        <p>記事が見つかりません</p>
      )}
    </div>
  );
}
