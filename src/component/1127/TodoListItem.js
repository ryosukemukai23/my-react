import "./TodoList.css";

export default function TodoListItem({handleRemoveClick, handleDoneClick, tododata}) {
  const handleDone = (e) => handleDoneClick(e.target.dataset.id);
  const handleRemove = (e) => handleRemoveClick(e.target.dataset.id);

  return (
    <li className={tododata.isDone ? "done" : ""}>
      {tododata.title}
      <button type="button" onClick={handleDone} data-id={tododata.id}>
        {tododata.isDone ? "戻す" : "済"}
      </button>
      <button type="button" onClick={handleRemove} data-id={tododata.id}>
        削除
      </button>
    </li>
  );
}
