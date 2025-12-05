import {useState} from "react";
import "./StateTodo.css";

let maxxid = 0;

export default function StateTodo() {
  const [title, setTitle] = useState("");
  const [Todo, setTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCheck = () => {
    if (title.trim() === "") return; // 空文字チェック

    setTodo([
      ...Todo,
      {
        id: ++maxxid,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
    setTitle(""); // 入力フィールドをクリア
  };

  const handleDone = (e) => {
    setTodo(
      Todo.map((item) => {
        if (item.id === Number(e.target.dataset.id)) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <label>
        やること：
        <input type="text" name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <button onClick={handleCheck}>追加</button>
      <ul>
        {Todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title} {/* ← ここが抜けていた！ */}
            <button data-id={item.id} onClick={handleDone} type="button">
              済
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
