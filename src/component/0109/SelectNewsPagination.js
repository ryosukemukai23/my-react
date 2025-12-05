import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import "./SelectNewsPagination.css";

const fetchNews = async ({category, query, page}) => {
  const url = `https://newsapi.org/v2/top-headlines?&category=${category}&q=${query}&pageSize=6&page=${page}&apiKey=726002db79b047b29cd70e8fc157a479`;
  const res = await fetch(url);

  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

export default function SelectNewsPagination() {
  const [category, setCategory] = useState("technology");
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [stateTime, setStateTime] = useState(null); // データ取得時刻
  const PageSize = 6;

  const {data, isLoading, isError, error, refetch} = useQuery({
    queryKey: ["news", category, query, page],
    queryFn: () => fetchNews({category, query, page}),
    keepPreviousData: true,
    onSuccess: () => {
      setStateTime(new Date()); // データ取得成功時に取得時刻をセット
    },
  });

  const articles = data?.articles || [];
  const totalResults = data?.totalResults || 0;
  const totalPages = Math.ceil(totalResults / PageSize);
  const isLastPage = page >= totalPages || articles.length < PageSize;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleSearchChange = (e) => setInputText(e.target.value);

  const handleSearchClick = () => {
    setQuery(inputText);
    setPage(1);
    refetch();
  };

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="SelectNewsPagination">
      <div className="controls">
        <select onChange={handleCategoryChange} value={category}>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="general">General</option>
        </select>

        <input type="text" placeholder="Search..." value={inputText} onChange={handleSearchChange} />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      {stateTime && <div className="state-time">Updated at: {stateTime.toLocaleTimeString()}</div>}

      <ul>
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((elm, index) => (
            <li key={index}>
              <a href={elm.url} target="_blank" rel="noopener noreferrer">
                {elm.urlToImage ? (
                  <img src={elm.urlToImage} alt={elm.title} />
                ) : (
                  <img src="https://via.placeholder.com/400x200?text=No+Image" alt={elm.title} />
                )}
                <h2>{elm.title}</h2>
                <p>{elm.description}</p>
              </a>
            </li>
          ))
        )}
      </ul>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1} type="button">
          Previous
        </button>
        <span>
          Page {page} / {totalPages} ({articles.length} articles)
        </span>
        <button onClick={handleNextPage} disabled={isLastPage} type="button">
          Next
        </button>
      </div>
    </div>
  );
}
