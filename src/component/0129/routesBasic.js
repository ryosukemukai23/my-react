// import {createBrowserRouter} from "react-router-dom";
// import AboutPage from "./AboutPage";
// import ArticlePage from "./ArticlePage";
// import TopPage from "./TopPage";

// const routesBasic = createBrowserRouter([
//   {
//     path: "/",
//     element: <TopPage />,
//   },
//   {
//     path: "/article/:id",
//     element: <ArticlePage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
// ]);

// export default routesBasic;

import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";
import TopPage from "./TopPage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>
  )
);

export default routesBasic;
