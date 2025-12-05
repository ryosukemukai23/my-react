import {createBrowserRouter} from "react-router-dom";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";
import RouteApp from "./RouterApp";
import TopPage from "./TopPage";

const routesLink = createBrowserRouter([
  {
    path: "/",
    element: <RouteApp />,
    children: [
      {
        path: "/",
        element: <TopPage />,
      },
      {
        path: "/article/:id",
        element: <ArticlePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default routesLink;
