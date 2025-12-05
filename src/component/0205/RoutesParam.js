import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import ArticlePage from "./ArticlePage";
import RouterParam from "./RouterParam"; // ← 別ファイルから
import TopPage from "./TopPage";

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterParam />}>
      <Route index element={<TopPage />} />
      <Route path="article/:id" element={<ArticlePage />} />
    </Route>
  )
);

export default routesParam;
