// routeLink.js
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";
import RouterNav from "./RouterNav"; // ✅ 修正
import TopPage from "./TopPage";
import InfoPage from "./InfoPage";

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterNav />}>
      <Route index element={<TopPage />} />
      <Route path="article/" element={<ArticlePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="article/info" element={<InfoPage />} />
    </Route>
  )
);

export default routesLink;
