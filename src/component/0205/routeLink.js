// routeLink.js
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";
import InfoPage from "./InfoPage";
import RouterNav from "./RouterNav";
import TopPage from "./TopPage";

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterNav />}>
      <Route index element={<TopPage />} />
      <Route path="article/info" element={<InfoPage />} />
      <Route path="article" element={<ArticlePage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);

export default routesLink;
