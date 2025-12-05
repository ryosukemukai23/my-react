import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RouterParam from "./RouterParam";
import PostPage from "./PostPage";
import TopPage from "./TopPage";

const postListAppRouter = createBrowserRouter(
  createRoutesFromElements(
<Route element={<RouterParam />}>
<Route index element={<TopPage />} />
<Route path="post/:id" element={<PostPage />} />
</Route>
  )
);

export default postListAppRouter;