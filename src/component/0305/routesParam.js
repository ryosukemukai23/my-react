import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import HomePage from "./HomePage";
import RouterParam from "./RouterParam";
import UserDetailPage from "./UserDetailPage";
import UserEditPage from "./UserEditPage";

const userData = [
  {id: 1, name: "A", email: "a@b.com"},
  {id: 2, name: "B", email: "b@b.com"},
  {id: 3, name: "C", email: "c@b.com"},
  {id: 4, name: "D", email: "d@b.com"},
  {id: 5, name: "E", email: "e@b.com"},
];

const fetchData = ({params}) => {
  const user = userData.find((user) => user.id === parseInt(params.id));
  if (!user) throw new Response("User Not Found", {status: 404});
  return user;
};

const updateUserData = (id, updatedUser) => {
  const userId = parseInt(id);
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].id === userId) {
      userData[i] = {...userData[i], ...updatedUser};
      return userData[i];
    }
  }
  throw new Response("Update Failed", {status: 500});
};

const userEditAction = async ({request, params}) => {
  const formData = await request.formData();
  const updatedUser = {
    name: formData.get("name"),
    email: formData.get("email"),
  };
  const user = await updateUserData(params.id, updatedUser);
  return redirect(`/users/${user.id}`);
};

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterParam />}>
      <Route index element={<HomePage />} loader={() => userData} />

      {/* ✅ 追加：ユーザー詳細ページ */}
      <Route path="users/:id" element={<UserDetailPage />} loader={fetchData} />

      <Route
        path="users/:id/edit"
        element={<UserEditPage />}
        loader={fetchData}
        action={userEditAction}
      />
    </Route>
  )
);

export default routesParam;
