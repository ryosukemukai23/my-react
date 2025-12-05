import {useState} from "react";

export default function () {
  const [form, setForm] = useState({
    animal: "dog",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`好きな動物:${form.animal}`);
  };

  return (
    <form action="">
      <label htmlFor="animal">好きな動物:</label>
      <br />
      <select name="animal" id="animal" value={form.animal} onChange={handleForm}>
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="snake">蛇</option>
      </select>
      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
