// import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
// import ArticleStatePage from "./AritlcleStatePage";
// import ArticleQueryPage from "./ArticleQueryPage";
// import RouterParam from "./RouterParam";
// import TopPage from "./TopPage";

// const routesParam = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RouterParam />}>
//       <Route path="/" element={<TopPage />} />
//       {/* クエリ版 */}
//       <Route path="articleQuery" element={<ArticleQueryPage />} />
//       {/* パラメータ版（もし使うなら） */}
//       <Route path="article/:id" element={<ArticleQueryPage />} />
//       <Route path="articleState" element={<ArticleStatePage />} />
//     </Route>
//   )
// );

// export default routesParam;

import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import ArticlePage from "./ArticlePage";
import NewsListPage from "./NewsListPage";
import RouterParam from "./RouterParam";
import SearchPage from "./SearchPage";

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<NewsListPage />} />
      <Route path="article/:id" element={<ArticlePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  )
);

export default routesParam;
