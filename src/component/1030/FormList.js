import {useState} from "react";

export default function FormList() {
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  const handleFormList = (e) => {
    const opts = e.target.options; // ← select の全 option を取得
    const data = [];

    for (const opt of opts) {
      if (opt.selected) {
        // ← select**ed** のタイプミスも修正
        data.push(opt.value);
      }
    }

    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  const show = () => {
    console.log(`好きな動物: ${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物:</label>
      <br />
      <select name="animal" id="animal" multiple value={form.animal} onChange={handleFormList}>
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
