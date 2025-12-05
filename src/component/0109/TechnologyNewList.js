import {useEffect, useState} from "react";
import "./TechnologyNewList.css";

const fetchNews = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?category=technology&pageSize=12&apiKey=726002db79b047b29cd70e8fc157a479"
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export default function TechnologyNewList() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchNews()
      .then((result) => setData(result))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="news-list">
      <ul>
        {data.articles.map((elm, index) => (
          <li key={index}>
            <a href={elm.url} target="_blank" rel="noopener noreferrer">
              {elm.urlToImage ? (
                <img src={elm.urlToImage} alt={elm.title} />
              ) : (
                <span className="no-image">No Image</span>
              )}
              <h3>{elm.title}</h3>
              <p>{elm.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
