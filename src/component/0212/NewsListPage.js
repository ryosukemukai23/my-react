import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const NewsListPage = () => {
  const [articles, setArticles] = useState([]); // 記事一覧
  const [query, setQuery] = useState(""); // 検索キーワード
  const navigate = useNavigate(); // ページ遷移用

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?category=technology&apiKey=726002db79b047b29cd70e8fc157a479")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((error) => console.error("ニュース取得エラー:", error));
  }, []); // ← 初回のみ実行

  const handleSearch = () => {
    navigate(`/search?query=${query}`);
  };

  return (
    <div>
      <h1>最新ニュース</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="検索キーワードを入力" />
      <button onClick={handleSearch}>検索</button>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <Link to={`/article/${index}`} state={{article}}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsListPage;
