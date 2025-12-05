import {useLoaderData, useLocation, useNavigate} from "react-router-dom";

const TodoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loaderTodo = useLoaderData();
  const stateTodo = location.state?.todo;

  const todo = stateTodo && loaderTodo;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>状態：{todo.completed ? "完了" : "未完了"}</p>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
};

export default TodoPage;
