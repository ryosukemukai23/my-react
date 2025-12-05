import "./TodoList.css";

export default function TodoForm({title, handleChangeTitle, handleClick, handleSort, desc}) {
  // propsの関数を呼び出すだけでOK
  const onChangeTitle = (e) => {
    handleChangeTitle(e.target.value);
  };

  return (
    <div className="form-wrap">
      <label>
        やること:
        <input type="text" name="title" value={title} onChange={onChangeTitle} />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <button type="button" onClick={handleSort}>
        {desc ? "昇順" : "降順"}
      </button>
    </div>
  );
}
