import {useForm} from "react-hook-form";

export default function FormBasic() {
  const defaultValues = {
    name: "山田太郎",
    email: "Oj2Tt@example.com",
    gender: "male",
    memo: "",
  };

  // ✅ 正しい構文
  const {
    register,
    handleSubmit,
    formState: {errors, isDirty, isValid, isSubmitting},
  } = useForm({defaultValues});

  const onsubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
      }, 4000);
    });
  };
  const onerror = (err) => {
    console.log(errors);
  };

  return (
    <form action="" onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", {
            required: "名前は必須入力です",
            maxLength: {
              value: 20,
              message: "20文字以内で入力してください",
            },
          })}
        />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="gender">
          性別:
          <input
            type="radio"
            value="male"
            {...register("gender", {
              required: "性別は必須入力です",
            })}
          />
          男性
        </label>
        <label htmlFor="gender">
          <input
            type="radio"
            value="female"
            {...register("gender", {
              required: "性別は必須入力です",
            })}
          />
          女性
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メール:</label>
        <br />
        <textarea
          id="memo"
          {...register("memo", {
            required: "備考は必須入力です",
            maxLength: {
              value: 10,
              message: "10文字以内で入力してください",
            },
            // ✅ NGワードチェックを追加
            validate: (value) => {
              const ngWords = ["禁止", "ダメ", "NG"]; // ← 好きなワードを追加
              const found = ngWords.find((word) => value.includes(word));
              return found ? `「${found}」は使用できません` : true;
            },
          })}
        />

        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考:</label>
        <br />

        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          送信
        </button>
        {isSubmitting && <span>送信中...</span>}
      </div>
    </form>
  );
}
