import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import UserDetailPage from "./UserDetailPage";
import UserListApp from "./UserListApp";
import UserListPage from "./UserListPage";

const userListAppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<UserListApp />}>
      <Route path="/" element={<UserListPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
    </Route>
  )
);

export default userListAppRouter;
