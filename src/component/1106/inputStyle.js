import React, {useState} from "react";
import "./inputStyle.css";

export default function InputStyle() {
  const [form, setForm] = useState({
    size: "100px",
    color: "skyblue",
    radius: "0",
  });
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = (e) => {
    e.preventDefault(); // ← ページリロード防止
    setMessage(`font-size: ${form.size}; color: ${form.color}; border-radius: ${form.radius}px;`);
  };

  return (
    <form>
      <div
        className="box"
        style={{
          width: form.size,
          height: form.size,
          backgroundColor: form.color,
          borderRadius: `${form.radius}px`,
          marginBottom: "20px",
        }}
      ></div>

      <div>
        <label htmlFor="size">サイズ(px)</label>
        <input type="text" id="size" name="size" value={form.size} onChange={handleForm} />
      </div>

      <div>
        <label htmlFor="color">色</label>
        <input type="text" id="color" name="color" value={form.color} onChange={handleForm} />
      </div>

      <div>
        <label htmlFor="radius">角丸(px)</label>
        <input type="text" id="radius" name="radius" value={form.radius} onChange={handleForm} />
      </div>

      <button type="button" onClick={show}>
        表示
      </button>

      <p>{message}</p>
    </form>
  );
}
