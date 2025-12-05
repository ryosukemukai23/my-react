import {useRef, useState} from "react";
import "./validationCheck.css";

export default function ValidationCheck() {
  const [form, setForm] = useState({
    name: "",
    sports: [],
    fileName: "",
  });

  const [nameFlg, setNameFlg] = useState(true);
  const [sportsFlg, setSportsFlg] = useState(true);
  const [fileNameFlg, setFileNameFlg] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false); // ✅ フォーム送信ボタン押下状態

  const sportsData = [
    {id: 1, value: "soccor", label: "サッカー"},
    {id: 2, value: "baseball", label: "野球"},
    {id: 3, value: "tennis", label: "テニス"},
    {id: 4, value: "golf", label: "ゴルフ"},
    {id: 5, value: "basketball", label: "バスケ"},
    {id: 6, value: "volleyball", label: "バレーボール"},
    {id: 7, value: "handball", label: "ハンドボール"},
  ];

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setNameFlg(e.target.value.length <= 10);
  };

  const handleFormMulti = (e) => {
    const fa = [...form.sports];
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      const index = fa.indexOf(e.target.value);
      if (index !== -1) fa.splice(index, 1);
    }
    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  const file = useRef(null);

  function show() {
    setIsSubmitted(true); // ✅ 押したらフラグON

    // スポーツ数チェック
    setSportsFlg(form.sports.length >= 2);

    // ファイルチェック
    const fs = file.current.files;
    if (fs.length > 0) {
      const f = fs[0];
      if (f.size / 1024 <= 500) {
        setFileNameFlg(true);
        setForm({
          ...form,
          fileName: f.name,
        });
      } else {
        setFileNameFlg(false);
      }
    } else {
      setFileNameFlg(false);
    }
  }

  return (
    <form>
      <div className="form-wrap">
        <label htmlFor="name">お名前:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleForm} />
        {!nameFlg && <div className="err-text">お名前は10文字以内で入力してください</div>}
      </div>

      <div className="form-wrap">
        <p>聞いたことのあるスポーツを2つ以上選んでください</p>
        <div>
          {sportsData.map((item) => (
            <span key={item.id}>
              <label htmlFor={`sports_${item.id}`}>{item.label}</label>
              <input
                type="checkbox"
                id={`sports_${item.id}`}
                name="sports"
                value={item.value}
                onChange={handleFormMulti}
              />
            </span>
          ))}
        </div>
        {!sportsFlg && isSubmitted && <div className="err-text">2つ以上選んでください</div>}
      </div>

      <div className="form-wrap">
        <input type="file" ref={file} />
        {!fileNameFlg && isSubmitted && <div className="err-text">500KB以内にしてください</div>}
        <button type="button" onClick={show}>
          送信
        </button>
      </div>

      {/* ✅ show()を押したら必ず送信結果を表示 */}
      {isSubmitted && (
        <div className="form-wrap">
          <div className="send-text">
            <div>送信結果</div>
            <div>お名前: {form.name || "（未入力）"}</div>
            <div>
              知っているスポーツ:
              {form.sports.length > 0 ? (
                form.sports.map((val, index) => <span key={index}>{val} </span>)
              ) : (
                <span>（未選択）</span>
              )}
            </div>
            <div>選択したファイル: {form.fileName || "（未選択 or サイズオーバー）"}</div>
          </div>
        </div>
      )}
    </form>
  );
}
