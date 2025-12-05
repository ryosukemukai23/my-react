import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

export default function ArticlePage() {
  const {id} = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(location.state?.article || null);

  useEffect(() => {
    // stateで記事が渡されていれば、APIを呼ばない
    if (location.state?.article) {
      return;
    }

    // stateがない場合のみ、APIから取得（直リンク対応）
    fetch(
      "https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=12&apiKey=726002db79b047b29cd70e8fc157a479"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles[parseInt(id, 10)]);
      });
  }, [id, location.state?.article]);

  if (!article) {
    return <p>読み込み中...</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>著者: {article.author}</p>
      <p>{article.description}</p>
    </div>
  );
}
