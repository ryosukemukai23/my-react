import {useState} from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";

let maxId = 0;

export default function TodoList() {
  const [desc, setDesc] = useState(true);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  // 入力内容を更新
  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  // 追加ボタン
  const handleClick = () => {
    if (title.trim() === "") return; // 空文字チェック
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
    setTitle(""); // 入力欄をクリア
  };

  // 「済」クリック時
  const handleDone = (id) => {
    setTodo(todo.map((item) => (item.id === Number(id) ? {...item, isDone: !item.isDone} : item)));
  };

  // 「削除」クリック時
  const handleRemove = (id) => {
    setTodo(todo.filter((item) => item.id !== Number(id)));
  };

  // 並び替え（昇順⇄降順）
  const handleSort = () => {
    const sorted = [...todo];
    sorted.sort((m, n) =>
      desc ? n.created.getTime() - m.created.getTime() : m.created.getTime() - n.created.getTime()
    );
    setDesc((d) => !d);
    setTodo(sorted);
  };

  return (
    <div className="todo-wrap">
      <TodoForm
        handleChangeTitle={handleChangeTitle}
        handleClick={handleClick}
        handleSort={handleSort}
        desc={desc}
        title={title}
      />
      <ul className="todo-list">
        {todo.map((item) => (
          <TodoListItem key={item.id} handleRemoveClick={handleRemove} handleDoneClick={handleDone} tododata={item} />
        ))}
      </ul>
    </div>
  );
}
