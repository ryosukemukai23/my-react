import {useState} from "react";
import "./StateTodo.css";

let maxxid = 0;

export default function StateTodo() {
  const [title, setTitle] = useState("");
  const [Todo, setTodo] = useState([]);
  const [desc, setDesc] = useState(true);

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

  const handleRemove = (e) => {
    setTodo(Todo.filter((item) => item.id !== Number(e.target.dataset.id)));
  };

  const handleSort = (e) => {
    const sorted = [...Todo];
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc((d) => !d);
    setTodo(sorted);
  };

  return (
    <div>
      <label>
        やること：
        <input type="text" name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <button onClick={handleCheck}>追加</button>
      <button type="button" onClick={handleSort}>
        ソート{desc ? "↑" : "↓"}
      </button>
      <ul>
        {Todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title} {/* ← ここが抜けていた！ */}
            <button data-id={item.id} onClick={handleDone} type="button">
              済
            </button>
            <button data-id={item.id} onClick={handleRemove} type="button">
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
