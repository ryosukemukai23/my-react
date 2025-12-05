import {useState} from "react";

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  const handleFormMulti = (e) => {
    const {name, value, checked} = e.target;

    // 現在の配列をコピー（破壊的変更を避ける）
    let newArray = [...form[name]];

    if (checked) {
      // チェックされたら追加（重複しないようにする）
      if (!newArray.includes(value)) {
        newArray.push(value);
      }
    } else {
      // チェックが外れたら削除
      newArray = newArray.filter((item) => item !== value);
    }

    // stateを更新
    setForm({
      ...form,
      [name]: newArray,
    });
  };

  const show = () => {
    console.log(`好きな動物: ${form.animal.join(", ")}`);
  };

  return (
    <form action="">
      <fieldset>
        <legend>好きな動物:</legend>

        <label htmlFor="animal_dog">犬</label>
        <input
          type="checkbox"
          id="animal_dog"
          name="animal"
          value="dog"
          checked={form.animal.includes("dog")}
          onChange={handleFormMulti}
        />
        <br />

        <label htmlFor="animal_hamster">ハムスター</label>
        <input
          type="checkbox"
          id="animal_hamster"
          name="animal"
          value="hamster"
          checked={form.animal.includes("hamster")}
          onChange={handleFormMulti}
        />
        <br />

        <label htmlFor="animal_cat">猫</label>
        <input
          type="checkbox"
          id="animal_cat"
          name="animal"
          value="cat"
          checked={form.animal.includes("cat")}
          onChange={handleFormMulti}
        />
        <br />

        <label htmlFor="animal_snake">蛇</label>
        <input
          type="checkbox"
          id="animal_snake"
          name="animal"
          value="snake"
          checked={form.animal.includes("snake")}
          onChange={handleFormMulti}
        />
      </fieldset>

      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
