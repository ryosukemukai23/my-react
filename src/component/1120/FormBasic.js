import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import "./validationCheck.css";

export default function ValidationCheck() {
  const fileRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null); // ✅ 送信済みデータを保持

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      sports: [],
      fileName: "",
    },
  });

  const sportsData = [
    {id: 1, value: "soccor", label: "サッカー"},
    {id: 2, value: "baseball", label: "野球"},
    {id: 3, value: "tennis", label: "テニス"},
    {id: 4, value: "golf", label: "ゴルフ"},
    {id: 5, value: "basketball", label: "バスケ"},
    {id: 6, value: "volleyball", label: "バレーボール"},
    {id: 7, value: "handball", label: "ハンドボール"},
  ];

  const onSubmit = (data) => {
    const files = fileRef.current.files;
    if (files.length > 0) {
      if (files[0].size / 1024 > 500) {
        alert("ファイルサイズは500KB以内にしてください");
        return;
      } else {
        data.fileName = files[0].name;
        setValue("fileName", files[0].name);
      }
    } else {
      data.fileName = "";
    }

    setSubmittedData(data); // ✅ 送信結果を保存
    console.log("送信データ:", data);
    alert("送信完了");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-wrap">
        <label htmlFor="name">お名前:</label>
        <input
          id="name"
          {...register("name", {
            required: "名前は必須です",
            maxLength: {value: 10, message: "10文字以内で入力してください"},
            validate: (val) => !["NG", "禁止"].some((w) => val.includes(w)) || "NGワードが含まれています",
            pattern: {
              value: /^[^\s]+ [^\s]+$/,
              message: "名前と名字の間にスペースを入れてください",
            },
          })}
        />
        {errors.name && <div className="err-text">{errors.name.message}</div>}
      </div>

      <div className="form-wrap">
        <p>聞いたことのあるスポーツを2つ以上選んでください</p>
        <div>
          {sportsData.map((item) => (
            <span key={item.id}>
              <input
                type="checkbox"
                id={`sports_${item.id}`}
                value={item.value}
                {...register("sports", {
                  validate: (val) => val.length >= 2 || "2つ以上選んでください",
                })}
              />
              <label htmlFor={`sports_${item.id}`}>{item.label}</label>
            </span>
          ))}
        </div>
        {errors.sports && <div className="err-text">{errors.sports.message}</div>}
      </div>

      <div className="form-wrap">
        <input type="file" ref={fileRef} />
      </div>

      <button type="submit">送信</button>

      {submittedData && ( // ✅ 送信済みデータがある場合のみ表示
        <div className="form-wrap">
          <h3>送信結果</h3>
          <div>お名前: {submittedData.name || "（未入力）"}</div>
          <div>
            知っているスポーツ:{" "}
            {submittedData.sports && submittedData.sports.length > 0 ? submittedData.sports.join(" ") : "（未選択）"}
          </div>
          <div>選択したファイル: {submittedData.fileName || "（未選択 or サイズオーバー）"}</div>
        </div>
      )}
    </form>
  );
}
