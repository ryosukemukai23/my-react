import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=726002db79b047b29cd70e8fc157a479`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("検索エラー:", error);
        setLoading(false);
      });
  }, [query]);

  if (loading) return <p>読み込み中...</p>;

  return (
    <div>
      <h1>検索結果: {query}</h1>

      {articles.length === 0 ? (
        <p>該当する記事がありません。</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <Link to={`/article/${index}`} state={{article}}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
