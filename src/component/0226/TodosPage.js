import {Link, useLoaderData} from "react-router-dom";

const TodosPage = () => {
  const todos = useLoaderData();
  return (
    <div>
      <h1>ToDo一覧</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`} state={{todo}}>
              {todo.title} ({todo.completed ? "完了" : "未完了"})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodosPage;
