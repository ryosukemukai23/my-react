// import {Route, createBrowserRouter, createRoutesFromElements, redirect} from "react-router-dom";

// import ArticleFormPage from "./ArticleFormPage";
// import ArticlePage from "./ArticlePage";
// import RouterParam from "./RouterParam";
// import TopPage from "./TopPage";

// const validateArticleForm = (form) => {
//   const errors = [];
//   const title = form.get("title");
//   const author = form.get("author");
//   const content = form.get("content");

//   if (!title || title.trim().length === 0) {
//     errors.push("タイトルを入力してください");
//   } else if (title.length > 50) {
//     errors.push("タイトルは50文字以内にしてください");
//   }

//   if (!author || author.trim().length === 0) {
//     errors.push("著者を入力してください");
//   }

//   if (!content || content.trim().length === 0) {
//     errors.push("内容を入力してください");
//   }

//   return errors;
// };

// const articleAction = async ({request}) => {
//   const form = await request.formData();
//   const errors = validateArticleForm(form);

//   if (errors.length > 0) {
//     return {errors};
//   }

//   console.log({
//     title: form.get("title"),
//     author: form.get("author"),
//     content: form.get("content"),
//   });

//   return redirect("/");
// };

// const routesParam = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RouterParam />}>
//       <Route path="/" element={<TopPage />}>
//         <Route path="article/form" element={<ArticleFormPage />} action={articleAction} />
//         <Route path="article/:id" element={<ArticlePage />} />
//       </Route>
//     </Route>
//   )
// );

// export default routesParam;

import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RouterParam from "./RouterParam";
import TopPage from "./TopPage";

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route index element={<TopPage />} />
      <Route path="weather/:city" lazy={() => import("./WeatherLazyPage")} />
    </Route>
  )
);

export default routesParam;
