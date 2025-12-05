// import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";

// export default function TopPage() {
//   const navigate = useNavigate();
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await fetch(
//           "https://newsapi.org/v2/top-headlines?category=technology&apiKey=726002db79b047b29cd70e8fc157a479"
//         );
//         const data = await res.json();

//         if (data.status === "ok") {
//           setArticles(data.articles);
//         } else {
//           throw new Error("ニュースを取得できませんでした。");
//         }
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (error) {
//     return <p style={{color: "red"}}>エラー: {error}</p>;
//   }

//   if (articles.length === 0) {
//     return <p>ニュースを読み込み中...</p>;
//   }

//   return (
//     <div>
//       <h1>最新テクノロジーニュース</h1>
//       <ul>
//         {articles.map((article, index) => (
//           <li key={index} style={{marginBottom: "20px"}}>
//             <h3>{article.title}</h3>
//             {article.urlToImage && (
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//                 style={{width: "300px", display: "block", margin: "10px 0"}}
//               />
//             )}
//             <p>{article.description}</p>
//             <button
//               onClick={() =>
//                 navigate(`/post/${index}`, {
//                   state: {post: article},
//                 })
//               }
//             >
//               詳細を読む
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function TopPage() {
  return (
    <div>
      <h1>トップページ</h1>
    </div>
  );
}
