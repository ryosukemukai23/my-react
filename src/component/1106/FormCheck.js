import {useState} from "react";

export default function FormCheck() {
  const [form, setForm] = useState({
    agreement: true,
  });

  const HandleCheck = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const show = () => {
    console.log(`同意確認: ${form.agreement ? "OK" : "NG"}`);
  };

  return (
    <form action="">
      <label htmlFor="agreement">同意する</label>
      <input type="checkbox" id="agreement" name="agreement" checked={form.agreement} onChange={HandleCheck} />
      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
