import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import RouterParam from "./RouterParam";
import TodoPage from "./TodoPage";
import TodosPage from "./TodosPage";

const todosLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw {status: response.status, message: "Could not fetch todos"};
  return response.json();
};

const todoLoader = async ({params}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  if (!response.ok) throw {status: response.status, message: "Could not fetch todo"};
  const data = await response.json();
  if (!data || Object.keys(data).length === 0) throw {status: 404, message: "Could not find todo"};
  return data;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/todos" element={<TodosPage />} loader={todosLoader} />
      <Route path="/todos/:id" element={<TodoPage />} loader={todoLoader} />
    </Route>
  )
);

export default router;
